using Microsoft.EntityFrameworkCore;
using TaskApi.Data.Interfaces;

namespace TaskApi.Data.Repository
{
    public sealed class TaskRepository<TContext> : Repository<Models.Task, TContext>
        where TContext : DbContext
    {
        public TaskRepository(TContext context) :
            base(context)
        { }

    }
}