using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using TaskApi.Helpers.Attributes;
using TaskApi.Models.Interfaces;

namespace TaskApi.Models
{
    public class User : IdentityUser<int>, IEntity
    {
        public ICollection<Project> Projects { get; set; } = new Collection<Project>();
        public ICollection<UserRole> UserRoles { get; set; } =  new Collection<UserRole>();
        long IEntity.Id { get; set; }
    }
}