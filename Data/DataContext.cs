using System;
using Microsoft.EntityFrameworkCore;
using TaskApi.Models;

namespace TaskApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :
            base(options)
        { }
        public DbSet<User> User { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Models.Task> Task { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>(x =>
            {
                x.Property(x => x.Login).HasColumnType("varchar(16)").IsRequired();
                x.Property(x => x.PasswordHash).HasColumnType("tinyblob").IsRequired();
                x.Property(x => x.PasswordSalt).HasColumnType("tinyblob").IsRequired();

                x.HasMany(x => x.Projects).WithOne(o => o.User);
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
