using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using TaskApi.Data;
using TaskApi.DTOs.TaskDTOs;

namespace TaskApi.Controllers
{
    [Authorize]
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
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bind service : {typeof(IMapper)}");

            _config = config ??
                throw new ArgumentNullException(nameof(config), $"DI doesn`t bind service : {typeof(IConfiguration)}");

            _unit = unit ??
                throw new ArgumentNullException(nameof(unit), $"DI doesn`t bind service : {typeof(UnitOfWork<>)}");
        }


        [HttpPost("{id:long}/create/{projectId:long}", Name = nameof(CreateTask))]
        public async Task<IActionResult> CreateTask(long id, long projectId, TaskForCreateDTO task)
        {
            var mappedTask = _mapper.Map<Models.Task>(task);

            var result = await _unit.TaskRepository.CreateTaskAsync(id, projectId, mappedTask);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            var mappedResult = _mapper.Map<TaskForViewDTO>(result) ??
                throw new ArgumentNullException();

            return CreatedAtAction(
                actionName: nameof(GetTask),
                routeValues: new { id },
                value: mappedResult
            );
        }

        [HttpGet("{id:long}/get", Name = nameof(GetTask))]
        public async Task<IActionResult> GetTask(long id) =>
           Ok(await _unit.TaskRepository.GetAsync(id));

        [HttpPut("{id:long}/update", Name = nameof(UpdateTask))]
        public async Task<IActionResult> UpdateTask(long id, TaskForUpdateDTO task)
        {

            var result = await _unit.TaskRepository.UpdateTaskAsync(task);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            var mappedResult = _mapper.Map<TaskForViewDTO>(result) ??
                throw new ArgumentNullException();

            return CreatedAtAction(
                actionName: nameof(GetTask),
                routeValues: new { id },
                value: mappedResult
           );
        }

        [HttpPut("{id:long}/updateStatus", Name = nameof(UpdateTaskStatus))]
        public async Task<IActionResult> UpdateTaskStatus(long id, TaskForUpdateStatus task)
        {

            await _unit.TaskRepository.UpdateStatusAsync(task);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return Ok();
        }

        [HttpPut("{id:long}/updatePrioraty", Name = nameof(UpdateTaskPrioraty))]
        public async Task<IActionResult> UpdateTaskPrioraty(long id, TaskForUpdatePriority task)
        {

            await _unit.TaskRepository.UpdatePrioratyAsync(task);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return Ok();
        }

        [HttpDelete("{id:long}/remove/{taskId:long}", Name = nameof(RemoveTask))]
        public async Task<IActionResult> RemoveTask(long id, long taskId)
        {
            await _unit.TaskRepository.RemoveTaskAsync(taskId);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return Ok();
        }
    }
}