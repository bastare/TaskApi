using System.Linq;
using System.Collections;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using TaskApi.Data.Repository.Interfaces;
using TaskApi.Models;

namespace TaskApi.Data.Repository
{
    public sealed class DataRepository<TContext> : Repository<User, TContext>
        where TContext : DbContext
    {
        public DataRepository(TContext context) : base(context)
        { }

        public async Task<IEnumerable> GetDataAsync(long id) =>
            await System.Threading.Tasks.Task.Run(() =>
                from p in Context.Set<Project>()

                join u in Context.Set<User>() on p.User.Id equals u.Id into joinData
                from leftUser in joinData.DefaultIfEmpty()

                where p.User.Id == id

                select new
                {
                    UserId = leftUser.Id,
                    ProjectId = p.Id,
                    ProjectName = p.Name,

                    Tasks = p.Tasks.Select(x => new
                    {
                        x.Id,
                        x.Name,
                        x.Priority,
                        x.Deadline,
                        x.Status
                    })
                }
            );

        public async Task<IEnumerable> GetTasksAsync(long id, long projectId) =>
            await System.Threading.Tasks.Task.Run(() =>
                from t in Context.Set<Models.Task>()

                join p in Context.Set<Project>() on t.Project.Id equals p.Id
                join u in Context.Set<User>() on p.User.Id equals u.Id into joinData
                from leftUser in joinData.DefaultIfEmpty()

                where (p.User.Id == id && p.Id == projectId)

                select new
                {
                    t.Id,
                    t.Name,
                    t.Priority,
                    t.Deadline,
                    t.Status
                }
            );

    }
}