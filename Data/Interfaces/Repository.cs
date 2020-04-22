using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using TaskApi.Models.Interfaces;

namespace TaskApi.Data.Interfaces
{

    public abstract class Repository<TEntity, TContext> : IRepository<TEntity>
        where TEntity : Entity
        where TContext : DbContext
    {
        readonly protected DbSet<TEntity> _dbSet;

        public Repository(TContext context)
        {
            _dbSet = context?.Set<TEntity>()
                ?? throw new ArgumentNullException(nameof(context));
        }

        public virtual async System.Threading.Tasks.Task AddAsync(TEntity entity, CancellationToken canselationsToken = default)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            await _dbSet.AddAsync(entity);
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken canselationsToken = default) =>
            await System.Threading.Tasks.Task.Run(() => _dbSet.AsNoTracking().AsEnumerable());//.ToArrayAsync();

        public virtual IAsyncEnumerable<TEntity> Filter(Expression<Func<TEntity, bool>> predicate)
        {
            if (predicate == null)
                throw new ArgumentNullException(nameof(predicate));

            return _dbSet.Where(predicate).AsAsyncEnumerable();
        }

        public virtual async Task<IEnumerable<TEntity>> FilterAsync(Expression<Func<TEntity, bool>> predicate)
        {
            if (predicate == null)
                throw new ArgumentNullException(nameof(predicate));

            return await _dbSet.AsNoTracking().Where(predicate).ToArrayAsync();
        }

        public bool Remove(TEntity entity)
        {
            if (entity == null)
                throw new ArgumentNullException(nameof(entity));

            if (!_dbSet.Any(x => x.Id == entity.Id))
                return false;

            if (_dbSet.Remove(entity).State == EntityState.Deleted)
                return true;

            return false;
        }

        public void Update(TEntity currentEntity, TEntity entityModified)
        {
            if (currentEntity == null)
                throw new ArgumentNullException(nameof(currentEntity));

            if (entityModified == null)
                throw new ArgumentNullException(nameof(entityModified));

            currentEntity = entityModified;

            _dbSet.Update(currentEntity).State = EntityState.Modified;
        }

        public virtual async Task<TEntity> FindAsync(Expression<Func<TEntity, bool>> predicate)
        {
            if (predicate == null)
                throw new ArgumentNullException(nameof(predicate));

            return await _dbSet.AsNoTracking().FirstOrDefaultAsync(predicate);
        }

        public virtual async Task<TEntity> GetAsync(long id, CancellationToken canselationsToken = default) =>
            await _dbSet.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }
}