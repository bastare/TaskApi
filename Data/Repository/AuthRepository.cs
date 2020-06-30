using System.Threading.Tasks;
using System.Linq;

using TaskApi.Data.Repository.Interfaces;
using TaskApi.Models;

using System.Collections.Generic;
using System.Collections;

namespace TaskApi.Data.Repository
{
    public sealed class AuthRepository<TContext> : Repository<User, TContext>
       where TContext : DataContext
    {
        public AuthRepository(TContext context) :
            base(context)
        { }

        public async Task<IEnumerable> GetUsersWithRoles() =>
            await System.Threading.Tasks.Task.Run(() =>
                (from user in Context.Users
                 orderby user
                 select new
                 {
                     Id = user.Id,
                     UserName = user.UserName,
                     Roles = (from userRole in user.UserRoles
                              join role in Context.Roles
                              on userRole.RoleId
                              equals role.Id
                              select role.Name).ToList()
                 })
            );
    }
}