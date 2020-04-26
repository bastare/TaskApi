using System.Collections;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskApi.Data.Interfaces;
using System.Linq;

using TaskApi.Models;

namespace TaskApi.Data.Repository
{


    public sealed class DataRepository<TContext> : Repository<User, TContext>
        where TContext : DbContext
    {
        public DataRepository(TContext context) : base(context)
        { }

        public async Task<IEnumerable> GetDataAsync(long id)
        {
            var result = from p in Context.Set<Project>()

                             //  join t in Context.Set<Models.Task>() on p.Id equals t.Project.Id into joinTask
                             //  from leftTask in joinTask.DefaultIfEmpty()

                         join u in Context.Set<User>() on p.User.Id equals u.Id into joinData
                         from leftUser in joinData.DefaultIfEmpty()

                         where p.User.Id == id

                         select new
                         {
                             UserId = leftUser.Id, //TODO: remove after prod

                             ProjectId = p.Id,
                             ProjectName = p.Name,

                             Tasks = p.Tasks.Select(x => new
                             {
                                 x.Id,
                                 x.Name,
                                 x.Priority,
                                 x.Deadline
                             })

                         };

            return await System.Threading.Tasks.Task.Run(() => result);
        }




    }
}