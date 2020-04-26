using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TaskApi.Data.Interfaces;
using TaskApi.Data.Repository;

namespace TaskApi.Data
{
    public sealed class UnitOfWork<TContext> : IUnitOfWork
        where TContext : DbContext
    {
        readonly TContext _context;

        AuthRepository<TContext> _userRepo;

        ProjectRepository<TContext> _projectRepo;

        TaskRepository<TContext> _taskRepo;

        DataRepository<TContext> _dataRepo;


        public DataRepository<TContext> DataRepository
        {
            get => _dataRepo ??= new DataRepository<TContext>(_context);
        }

        public AuthRepository<TContext> UserRepository
        {
            get => _userRepo ??= new AuthRepository<TContext>(_context);
        }

        public ProjectRepository<TContext> ProjectRepository
        {
            get => _projectRepo ??= new ProjectRepository<TContext>(_context);
        }

        public TaskRepository<TContext> TaskRepository
        {
            get => _taskRepo ??= new TaskRepository<TContext>(_context);
        }

        public UnitOfWork(TContext context) =>
            _context = context ??
                throw new ArgumentNullException(nameof(context));

        public async Task<bool> Commit() =>
            await _context.SaveChangesAsync() == 0
                ? false
                : true;

        public async ValueTask DisposeAsync() =>
            await _context.DisposeAsync();

        public void Dispose() =>
            _context.Dispose();
    }
}