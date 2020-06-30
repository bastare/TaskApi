using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

using TaskApi.Models.Interfaces;

namespace TaskApi.Data.Repository.Interfaces
{
    public interface IRepository<TEntity> where TEntity : IEntity
    {
        Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken canselationsToken = default);
        Task<TEntity> GetAsync(long id, CancellationToken canselationsToken = default);
        Task<TEntity> AddAsync(TEntity entity, CancellationToken canselationsToken = default);
        void Update(TEntity entity);
        bool Remove(TEntity entity);
    }
}