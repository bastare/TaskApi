using Microsoft.EntityFrameworkCore;
using TaskApi.Data.Interfaces;
using TaskApi.Models;

namespace TaskApi.Data.Repository
{

    public sealed class ProjectRepository<TContext> : Repository<Project, TContext>
        where TContext : DbContext
    {
        public ProjectRepository(TContext context) :
            base(context)
        { }

    }
}