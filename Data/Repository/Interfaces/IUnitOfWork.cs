using System;
using System.Threading.Tasks;
using TaskApi.Data.Repository;

namespace TaskApi.Data.Repository.Interfaces
{
    public interface IUnitOfWork : IAsyncDisposable, IDisposable
    {
        Task<bool> Commit();
    }
}