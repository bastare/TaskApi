using System;
using System.Threading.Tasks;
using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using TaskApi.Data;

namespace TaskApi.Controllers
{
    [ApiController]
    [Route("{controller}")]
    public class TaskController : ControllerBase
    {
        readonly IMapper _mapper;
        readonly IConfiguration _config;
        readonly UnitOfWork<DataContext> _unit;

        public TaskController(UnitOfWork<DataContext> unit, IMapper mapper, IConfiguration config)
        {
            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bind service : {mapper}");

            _config = config ??
                throw new ArgumentNullException(nameof(config), $"DI doesn`t bind service : {config}");

            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bind service : {unit}");
        }

        [HttpGet("test", Name = nameof(GetAction))]
        public async Task<IActionResult> GetAction()
        {
            var result = await _unit.TaskRepository.GetAllAsync();

            return Ok(result);
        }
    }
}