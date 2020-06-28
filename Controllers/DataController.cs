using System;

using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

using TaskApi.Data;
using System.Threading.Tasks;
using TaskApi.DTOs.ProjectDTOs.Pagination;
using TaskApi.Helpers.Extensions;

namespace TaskApi.Controllers
{

    [Authorize]
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


        [HttpGet("{id:long}/getData", Name = nameof(GetData))]
        public async Task<IActionResult> GetData(long id, [FromQuery]ProjectParameters projectParameters)
        {
            var result = await _unit.DataRepository.GetDataAsync(id, projectParameters);
            
            Response.AddPagination(result.CurrentPage, result.PageSize, 
                result.TotalCount, result.TotalPages);

            return Ok(result);
        }


        [HttpGet("{id:long}/getTasks/{projectId}", Name = nameof(GetTasks))]
        public async Task<IActionResult> GetTasks(long id, long projectId)
        {
            var result = await _unit.DataRepository.GetTasksAsync(id, projectId);

            return Ok(result);
        }
    }
}