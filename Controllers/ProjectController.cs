using System;

using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using TaskApi.Data;
using System.Threading.Tasks;

namespace TaskApi.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("{controller}")]
    public class ProjectController : ControllerBase
    {
        readonly UnitOfWork<DataContext> _unit;
        readonly IMapper _mapper;
        public ProjectController(UnitOfWork<DataContext> unit, IMapper mapper)
        {
            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bind service : {unit}");

            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bind service : {mapper}");
        }

        [HttpGet("get", Name = nameof(GetTask))]
        public async Task<IActionResult> GetTask()
        {

            return Ok(await _unit.ProjectRepository.GetAllAsync());
        }
    }
}