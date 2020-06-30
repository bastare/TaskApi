using System;
using System.Threading.Tasks;

using AutoMapper;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using TaskApi.Data;
using TaskApi.DTOs.UserDTOs;
using TaskApi.Helpers;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/{controller}")]
    public class AuthController : ControllerBase
    {
        readonly IMapper _mapper;
        readonly IConfiguration _config;
        readonly UnitOfWork<DataContext> _unit;
        readonly UserManager<User> _userManager;
        readonly SignInManager<User> _signInManager;

        public AuthController(
            UnitOfWork<DataContext> unit,
            IMapper mapper,
            IConfiguration config,
            UserManager<User> userManager,
            SignInManager<User> signInManager
        )
        {
            _userManager = userManager ??
                throw new ArgumentNullException(nameof(userManager), $"DI doesn`t bound service : {typeof(UserManager<>)}");

            _signInManager = signInManager ??
                throw new ArgumentNullException(nameof(signInManager), $"DI doesn`t bound service : {typeof(SignInManager<>)}");

            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bound service : {typeof(IMapper)}");

            _config = config ??
                throw new ArgumentNullException(nameof(config), $"DI doesn`t bound service : {typeof(IConfiguration)}");

            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bound service : {typeof(UnitOfWork<>)}");
        }

        [HttpPost("authorization", Name = nameof(Authorization))]
        public async Task<IActionResult> Authorization(UserForAuthorizationDTO userForAuthorization)
        {
            var mappedUser = _mapper.Map<User>(userForAuthorization);

            var identityResult = await _userManager.CreateAsync(mappedUser, userForAuthorization.Password);

            if (!identityResult.Succeeded)
                return BadRequest(identityResult.Errors);

            var createdUser = await _userManager.FindByNameAsync(mappedUser.UserName);

            (string token, User user) = await Token.CreateToken(createdUser, _config, _userManager);

            return CreatedAtAction(
                actionName: nameof(Authentication),
                value: new
                {
                    token,
                    user = _mapper.Map<UserForViewDTO>(user)
                }
                );
        }

        [HttpPost("authentication", Name = nameof(Authentication))]
        public async Task<IActionResult> Authentication(UserForAuthenticationDTO userForAthentication)
        {
            var findedUser = await _userManager.FindByNameAsync(userForAthentication.UserName);

            var identityResult = await _signInManager.CheckPasswordSignInAsync(findedUser, userForAthentication.Password, false);

            if (!identityResult.Succeeded)
                return Unauthorized("Wrong login or password");

             (string token, User user) = await Token.CreateToken(findedUser, _config, _userManager);

            return Ok(
                new
                {
                    token,
                    user = _mapper.Map<UserForViewDTO>(user)
                });
        }
    }
}
