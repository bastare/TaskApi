using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Identity;

using TaskApi.Models;

namespace TaskApi.Helpers
{
    public static class Token
    {
        public static async Task<Tuple<string, User>> CreateToken(User user, IConfiguration config, UserManager<User> userManager)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user), "User value is null");

            var claims = new HashSet<Claim> {
                    new Claim (ClaimTypes.NameIdentifier, user.Id.ToString ()),
                    new Claim (ClaimTypes.Name, user.UserName)
                };

            foreach (var role in await userManager.GetRolesAsync(user))
                claims.Add(new Claim(ClaimTypes.Role, role));

            var credentials = new SigningCredentials(
                key: new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("NotSecret:Token").Value)),
                algorithm: SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.WriteToken(
                token: tokenHandler.CreateToken(tokenDescriptor)
            );

            return new Tuple<string, User>(token, user);
        }
    }
}