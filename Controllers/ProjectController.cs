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

        [HttpPost("{id}/update", Name = nameof(UpdateProject))]
        public async Task<IActionResult> UpdateProject(long id, ProjectForUpdateDTO project)
        {

            await _unit.ProjectRepository.UpdateProjectAsync(project);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            return RedirectToAction("getData", "Data", new { controller = "Data", id = id });
        }


        [HttpPost("{id}/create", Name = nameof(CreateProject))]
        public async Task<IActionResult> CreateProject(long id, ProjectForCreateDTO project)
        {
            var mappedProject = _mapper.Map<Project>(project);

            var result = await _unit.ProjectRepository.CreateProjectAsync(id, mappedProject);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            var mappedResult = _mapper.Map<ProjectForViewDTO>(result);

            // return Ok(mappedResult);
            return RedirectToAction("getData", "Data", new { controller = "Data", id = id });
        }

        [HttpDelete("{id}/remove", Name = nameof(RemoveProject))]
        public async Task<IActionResult> RemoveProject(long id, ProjectForRemoveDTO project)
        {
            await _unit.ProjectRepository.RemoveProjectAsync(project);

            if (!await _unit.Commit())
                return BadRequest("Data wasn`t saved");

            // return Ok("Project was deleted");
            return RedirectToAction("getData", "Data", new { controller = "Data", id = id });
        }


    }
}