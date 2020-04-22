using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using AutoMapper;

using TaskApi.Data;
using TaskApi.DTOs.UserDTOs;
using TaskApi.Helpers.Status;
using TaskApi.Helpers.Status.Interfaces;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [ApiController]
    [Route("{controller}")]
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
                return BadRequest(new BadRequestError($"User with '{userForAuthorization.Login}' name, already exist"));

            await _unit.UserRepository.Authorization(
                login: userForAuthorization.Login,
                password: userForAuthorization.Password
            );

            return await _unit.Commit()
                ? StatusCode(201)
                : throw new Exception("Data wasn`t saved");
        }

        [HttpPost("authentication", Name = nameof(Authentication))]
        public async Task<IActionResult> Authentication(UserForAuthenticationDTO userForAthentication)
        {


            var authDate = await _unit.UserRepository.Authentication(
                login: userForAthentication.Login,
                password: userForAthentication.Password,
                config: _config
            );

            if (authDate != null)
            {
                (string token, User user) = authDate;

                return Ok(
                    new
                    {
                        token = token,
                        user = _mapper.Map<UserForViewDTO>(user)
                    });
            }

            return Unauthorized(new UnauthorizedError("Wrong login or password. Try again"));
        }
    }
}