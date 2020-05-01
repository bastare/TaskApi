using System;

using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using TaskApi.Data;
using System.Threading.Tasks;
using TaskApi.Models;
using TaskApi.DTOs.ProjectDTOs;

namespace TaskApi.Controllers
{

    // [Authorize]
    [ApiController]
    [Route("{controller}")]
    public class DataController : ControllerBase
    {
        readonly UnitOfWork<DataContext> _unit;
        readonly IMapper _mapper;

        public DataController(UnitOfWork<DataContext> unit, IMapper mapper)
        {
            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bind service : {unit}");

            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bind service : {mapper}");
        }


        [HttpGet("{id}/getData", Name = nameof(GetData))]
        public async Task<IActionResult> GetData(long id)
        {
            var result = await _unit.DataRepository.GetDataAsync(id);

            return Ok(result);
        }


        [HttpGet("{id}/getTasks{projectId}", Name = nameof(GetTasks))]
        public async Task<IActionResult> GetTasks(long id, long projectId)
        {
            var result = await _unit.DataRepository.GetTasksAsync(id, projectId);

            return Ok(result);
        }
    }
}