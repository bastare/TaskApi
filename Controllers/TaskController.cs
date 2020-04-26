using System;
using System.Threading.Tasks;
using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using TaskApi.Data;
using TaskApi.DTOs.TaskDTOs;

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

        [HttpPost("{id}/create/{projectId}", Name = nameof(CreateTask))]
        public async Task<IActionResult> CreateTask(long id, long projectId, TaskForCreateDTO task)
        {
            var mappedTask = _mapper.Map<Models.Task>(task);

            var result = await _unit.TaskRepository.CreateTaskAsync(id, projectId, mappedTask);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return Ok();
        }

        [HttpPost("{id}/update", Name = nameof(UpdateTask))]
        public async Task<IActionResult> UpdateTask(long id, TaskForUpdateDTO task)
        {

            await _unit.TaskRepository.UpdateTaskAsync(task);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");


            return RedirectToAction("getData", "Data", new { controller = "Data", id = id });
        }

        [HttpDelete("{id}/remove", Name = nameof(RemoveTask))]
        public async Task<IActionResult> RemoveTask(long id, TaskForRemoveDTO task)
        {
            await _unit.TaskRepository.RemoveTaskAsync(task);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            // return Ok("Project was deleted");
            return RedirectToAction("getData", "Data", new { controller = "Data", id = id });
        }
    }
}