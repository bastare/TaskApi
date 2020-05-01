using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;

using TaskApi.Data.Repository.Interfaces;
using TaskApi.Models;

namespace TaskApi.Data.Repository
{
    public sealed class AuthRepository<TContext> : Repository<User, TContext>
       where TContext : DbContext
    {
        public AuthRepository(TContext context) :
            base(context)
        { }

        public async System.Threading.Tasks.Task Authorization(string login, string password)
        {
            if (string.IsNullOrEmpty(password) || string.IsNullOrEmpty(login))
                throw new ArgumentNullException($"{nameof(password)} or {nameof(login)}");

            (byte[] passwordHash, byte[] passwordSalt) = GetPasswordHash(password);

            var user = new User
            {
                Login = login,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            await AddAsync(user);
        }

        (byte[], byte[]) GetPasswordHash(string password)
        {
            using var hmac = new HMACSHA512();
            byte[] passwordSalt = hmac.Key;
            byte[] passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

            return (passwordHash, passwordSalt);
        }

        public async Task<Tuple<string, User>> Authentication(string login, string password, IConfiguration config)
        {
            var user = await Context.Set<User>().FirstOrDefaultAsync(x => x.Login == login);

            if (user == null)
                return null;

            if (!VarifyPassword(password, user.PasswordHash, user.PasswordSalt))
                return null;

            var token = CreateToken(user, config);

            return new Tuple<string, User>(token, user);
        }

        bool VarifyPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using var hmac = new HMACSHA512(passwordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

            for (int i = 0; i < computedHash.Length; i++)
                if (computedHash[i] != passwordHash[i])
                    return false;

            return true;
        }

        string CreateToken(User user, IConfiguration config)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user));

            var claims = new[] {
                    new Claim (ClaimTypes.NameIdentifier, user.Id.ToString ()),
                    new Claim (ClaimTypes.Name, user.Login)
                };

            var crebs = new SigningCredentials(
                key: new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.GetSection("NotSecret:Token").Value)),
                algorithm: SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = crebs
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.WriteToken(
                token: tokenHandler.CreateToken(tokenDescriptor)
            );

            return token;
        }

        public async Task<bool> IsUserExist(string login)
        {
            if (login == null)
                throw new ArgumentNullException(nameof(login));

            return await Context.Set<User>().AnyAsync(x => x.Login == login);
        }
    }
}