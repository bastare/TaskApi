using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using AutoMapper;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using TaskApi.Data;
using TaskApi.DTOs.UserDTOs;
using TaskApi.Helpers.Status;
using TaskApi.Helpers.Status.Interfaces;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [ApiController]
    [Route("api/{controller}")]
    public class AuthController : ControllerBase
    {
        readonly IMapper _mapper;
        readonly IConfiguration _config;
        readonly UnitOfWork<DataContext> _unit;

        public AuthController(UnitOfWork<DataContext> unit, IMapper mapper, IConfiguration config)
        {
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bind service : {mapper}");

            _config = config ??
                throw new ArgumentNullException(nameof(config), $"DI doesn`t bind service : {config}");

            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bind service : {unit}");
        }

        [HttpPost("authorization", Name = nameof(Authorization))]
        public async Task<IActionResult> Authorization(UserForAuthorizationDTO userForAuthorization)
        {
            if (await _unit.UserRepository.IsUserExist(userForAuthorization.Login))
                return BadRequest($"User with '{userForAuthorization.Login}' login, already exist");

            await _unit.UserRepository.Authorization(
                login: userForAuthorization.Login,
                password: userForAuthorization.Password
            );

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return StatusCode(201);
        }

        [HttpPost("authentication", Name = nameof(Authentication))]
        public async Task<IActionResult> Authentication(UserForAuthenticationDTO userForAthentication)
        {
            var authDate = await _unit.UserRepository.Authentication(
                login: userForAthentication.Login,
                password: userForAthentication.Password,
                config: _config
            );

            if (authDate is null)
                return Unauthorized("Wrong login or password. Try again");

            (string token, User user) = authDate;

            return Ok(
                new
                {
                    token,
                    user = _mapper.Map<UserForViewDTO>(user)
                });
        }
    }
}
