using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;

using Newtonsoft.Json;

using TaskApi.Models;


namespace TaskApi.Helpers.Seed
{
    public class Seed
    {
        public async static System.Threading.Tasks.Task SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (!userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("Helpers/Seed/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<Role>
                {
                    new Role{Name = "User"},
                    new Role{Name = "Admin"}
                };

                foreach (var role in roles)
                    await roleManager.CreateAsync(role);

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "password");
                    await userManager.AddToRoleAsync(user, "User");
                }

                var adminUser = new User
                {
                    UserName = "Admin"
                };

                IdentityResult result = await userManager.CreateAsync(adminUser, "password");

                if (result.Succeeded)
                {
                    var admin = await userManager.FindByNameAsync("Admin");
                    await userManager.AddToRolesAsync(admin, new[] {"Admin"});
                }
            }
        }
    }
}