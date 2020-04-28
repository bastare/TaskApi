using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskApi.Data.Interfaces;
using TaskApi.DTOs.ProjectDTOs;
using TaskApi.Models;

namespace TaskApi.Data.Repository
{

    public sealed class ProjectRepository<TContext> : Repository<Project, TContext>
        where TContext : DbContext
    {
        public ProjectRepository(TContext context) :
            base(context)
        {}

        public async ValueTask<Project> CreateProjectAsync(long id, Project project)
        {
            var result = await Context.Set<User>().FirstOrDefaultAsync(x => x.Id == id);
            project.User = result;

            result.Projects.Add(project);

            return await AddAsync(project);
        }

        public async System.Threading.Tasks.Task UpdateProjectAsync(ProjectForUpdateDTO project)
        {
            var currentEntity = Context.Set<Project>().FirstOrDefault(x => x.Id == project.Id);

            currentEntity.Name = project.Name;
            await System.Threading.Tasks.Task.Run(() => Context.Update(currentEntity));
        }

        public async System.Threading.Tasks.Task RemoveProjectAsync(long id)
        {
            var currentEntity = await Context.Set<Project>().FirstOrDefaultAsync(x => x.Id == id);

            await System.Threading.Tasks.Task.Run(() => Remove(currentEntity));
        }
    }
}