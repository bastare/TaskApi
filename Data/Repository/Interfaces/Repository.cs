using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using TaskApi.Models.Interfaces;

namespace TaskApi.Data.Repository.Interfaces
{

    public abstract class Repository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : Entity
        where TContext : DbContext
    {
        protected DbContext Context { get; }

        public Repository(TContext context)
        {
            Context = context;
        }

        public virtual async Task<TEntity> AddAsync(TEntity entity, CancellationToken canselationsToken = default)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            var result = await Context.Set<TEntity>().AddAsync(entity);

            return result.Entity;
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken canselationsToken = default) =>
            await Context.Set<TEntity>().ToArrayAsync();

        public virtual IAsyncEnumerable<TEntity> Filter(Expression<Func<TEntity, bool>> predicate)
        {
            if (predicate == null)
                throw new ArgumentNullException(nameof(predicate));

            return Context.Set<TEntity>().Where(predicate).AsAsyncEnumerable();
        }

        public virtual async Task<IEnumerable<TEntity>> FilterAsync(Expression<Func<TEntity, bool>> predicate)
        {
            if (predicate == null)
                throw new ArgumentNullException(nameof(predicate));

            return await Context.Set<TEntity>().AsNoTracking().Where(predicate).ToArrayAsync();
        }

        public bool Remove(TEntity entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            if (!Context.Set<TEntity>().Any(x => x.Id == entity.Id))
                return false;

            if (Context.Set<TEntity>().Remove(entity).State == EntityState.Deleted)
                return true;

            return false;
        }

        public void Update(TEntity entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            var result = Context.Set<TEntity>().Update(entity);
            result.State = EntityState.Modified;
        }

        public virtual async Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> predicate)
        {
            if (predicate == null)
                throw new ArgumentNullException(nameof(predicate));

            return await Context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(predicate);
        }

        public virtual async Task<TEntity> GetAsync(long id, CancellationToken canselationsToken = default) =>
            await Context.Set<TEntity>().AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }
}