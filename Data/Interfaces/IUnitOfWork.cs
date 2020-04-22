using System;
using System.Threading.Tasks;
using TaskApi.Data.Repository;

namespace TaskApi.Data.Interfaces
{
    public interface IUnitOfWork : IAsyncDisposable, IDisposable
    {
        Task<bool> Commit();
    }
}