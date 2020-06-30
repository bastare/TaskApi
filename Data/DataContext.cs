using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using TaskApi.Models;
using Microsoft.AspNetCore.Identity;

namespace TaskApi.Data
{
    public class DataContext : IdentityDbContext<
            User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>
        >
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        { }

        public DbSet<Project> Project { get; set; }
        public DbSet<Models.Task> Task { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserRole>(userRole =>
            {
                userRole.HasKey(ur => new { ur.UserId, ur.RoleId });

                userRole.HasOne(ur => ur.Role)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.RoleId)
                    .IsRequired();

                userRole.HasOne(ur => ur.User)
                    .WithMany(r => r.UserRoles)
                    .HasForeignKey(ur => ur.UserId)
                    .IsRequired();
            });

            builder.Entity<Project>(x =>
            {
                x.Property(x => x.Name).HasColumnType("varchar(32)").IsRequired();

                x.HasOne(x => x.User).WithMany(x => x.Projects).OnDelete(DeleteBehavior.Cascade);
                x.HasMany(x => x.Tasks).WithOne(o => o.Project);
            });

            builder.Entity<Models.Task>(x =>
            {
                x.Property(x => x.Name).HasColumnType("varchar(32)").IsRequired();
                x.Property(x => x.Status).HasColumnType("ENUM('Done','Expired','Onway')").IsRequired();
                x.Property(x => x.Deadline).HasColumnType("DATE").IsRequired();

                x.HasOne(x => x.Project).WithMany(x => x.Tasks).OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
