using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskApi.Data.Interfaces;
using TaskApi.DTOs.TaskDTOs;
using TaskApi.Models;

namespace TaskApi.Data.Repository
{
    public sealed class TaskRepository<TContext> : Repository<Models.Task, TContext>
        where TContext : DbContext
    {
        public TaskRepository(TContext context) :
            base(context)
        { }

        public async ValueTask<Models.Task> CreateTaskAsync(long id, long projectId, Models.Task task)
        {
            var currentTask = Context.Set<Project>().FirstOrDefault(x => x.Id == projectId);
            currentTask.Tasks.Add(task);

            return await AddAsync(task);
        }

        public async System.Threading.Tasks.Task UpdateTaskAsync(TaskForUpdateDTO task)
        {
            var currentEntity = Context.Set<Models.Task>().FirstOrDefault(x => x.Id == task.Id);

            currentEntity.Name = task.Name;
            currentEntity.Deadline = task.Deadline;
            currentEntity.Priority = task.Priority;

            await System.Threading.Tasks.Task.Run(() => Context.Update(currentEntity));
        }

        public async System.Threading.Tasks.Task RemoveTaskAsync(TaskForRemoveDTO task)
        {
            var currentEntity = await Context.Set<Models.Task>().FirstOrDefaultAsync(x => x.Id == task.Id);

            await System.Threading.Tasks.Task.Run(() => Remove(currentEntity));
        }



    }
}
