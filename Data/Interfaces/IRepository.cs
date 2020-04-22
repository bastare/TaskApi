using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

using TaskApi.Models.Interfaces;

namespace TaskApi.Data.Interfaces
{
    public interface IRepository<TEntity> where TEntity : Entity
    {
        Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken canselationsToken = default);
        Task<TEntity> GetAsync(long id, CancellationToken canselationsToken = default);
        System.Threading.Tasks.Task AddAsync(TEntity entity, CancellationToken canselationsToken = default);
        void Update(TEntity currentEntity, TEntity modifiedEntity);
        bool Remove(TEntity entity);
    }
}