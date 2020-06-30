using System.Linq;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TaskApi.Data;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [Authorize(Roles = "Admin")]
    [ApiController]
    [Route("{controller}")]
    public class AdminController : ControllerBase
    {
        readonly IMapper _mapper;
        readonly UnitOfWork<DataContext> _unit;
        readonly UserManager<User> _userManager;
        readonly SignInManager<User> _signInManager;

        public AdminController(
            UnitOfWork<DataContext> unit,
            IMapper mapper,
            UserManager<User> userManager,
            SignInManager<User> signInManager
            )
        {
            _signInManager = signInManager ??
                throw new ArgumentNullException(nameof(signInManager), $"DI doesn`t bound service : {typeof(SignInManager<>)}");

            _userManager = userManager ??
                throw new ArgumentNullException(nameof(userManager), $"DI doesn`t bound service : {typeof(UserManager<>)}");

            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bound service : {typeof(IMapper)}");

            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bound service : {typeof(UnitOfWork<>)}");
        }

        

        [HttpPost("editRoles/{userName}")]
        public async Task<IActionResult> EditRoles(string userName, RoleEditDTO roleEditDTO)
        {
            var user = await _userManager.FindByNameAsync(userName);

            var userRoles = await _userManager.GetRolesAsync(user);

            var selectedRoles = roleEditDTO.RoleNames ?? new string[] {};


            if(!(await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles))).Succeeded) 
                return BadRequest("Failed to add roles");

            if(!(await _userManager.AddToRolesAsync(user, userRoles.Except(selectedRoles))).Succeeded) 
                return BadRequest("Failed to remove roles");
            
            return Ok(await _userManager.GetRolesAsync(user));
        }

        [HttpGet("getUserWithRoles")]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            var result = await _unit.AuthRepository.GetUsersWithRoles();

            return Ok(result);
        }
    }
}