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
    [ApiController]
    [Route("{controller}")]
    public class ProjectController : ControllerBase
    {
        readonly UnitOfWork<DataContext> _unit;
        readonly IMapper _mapper;
        public ProjectController(UnitOfWork<DataContext> unit, IMapper mapper)
        {
            _unit = unit ??
               throw new ArgumentNullException(nameof(unit), $"DI doesn`t bound service : {typeof(UnitOfWork<>)}");

            _mapper = mapper ??
                throw new ArgumentNullException(nameof(mapper), $"DI doesn`t bound service : {typeof(IMapper)}");
        }

        [HttpPut("{id:long}/update", Name = nameof(UpdateProject))]
        public async Task<IActionResult> UpdateProject(long id, ProjectForUpdateDTO project)
        {
            await _unit.ProjectRepository.UpdateProjectAsync(project);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return Ok();
        }


        [HttpPost("{id:long}/create", Name = nameof(CreateProject))]
        public async Task<IActionResult> CreateProject(long id, ProjectForCreateDTO project)
        {
            var mappedProject = _mapper.Map<Project>(project);

            var result = await _unit.ProjectRepository.CreateProjectAsync(id, mappedProject) ??
                throw new ArgumentNullException();

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            var mappedResult = _mapper.Map<ProjectForViewDTO>(result) ??
                throw new ArgumentNullException();

            return Ok();
        }

        [HttpDelete("{id:long}/remove/{projectId:long}", Name = nameof(RemoveProject))]
        public async Task<IActionResult> RemoveProject(long id, long projectId)
        {
            await _unit.ProjectRepository.RemoveProjectAsync(projectId);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return Ok();
        }
    }
}