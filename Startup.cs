using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

using AutoMapper;

using TaskApi.Data;
using TaskApi.Filter;
using TaskApi.Data.Repository.Interfaces;
using TaskApi.Data.Repository;
using TaskApi.Models;

namespace TaskApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddTransient<NullValidationFilter>();

            services.AddScoped<IRepository<User>, AuthRepository<DataContext>>();
            services.AddScoped<IRepository<Project>, ProjectRepository<DataContext>>();
            services.AddScoped<IRepository<Models.Task>, TaskRepository<DataContext>>();
            services.AddScoped<UnitOfWork<DataContext>>();

            services.AddControllers();

            services.AddAutoMapper(typeof(Startup));

            services.AddDbContext<DataContext>(opt =>
               opt.UseMySql(Configuration.GetConnectionString("DefaultConnection"))
            );

            services.AddCors(o => o.AddPolicy("AllowAll", builder =>
                        builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                )
            );

            services.AddMvcCore(opt => opt.Filters.AddService<NullValidationFilter>())
                .AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);



            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("NotSecret:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    }
                );
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors("AllowAll");
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication().
            UseAuthorization();

            app.UseDefaultFiles().
            UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapFallbackToController(nameof(Helpers.Fallback.Index), nameof(Helpers.Fallback));
            });
        }
    }
}
