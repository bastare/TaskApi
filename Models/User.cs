using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using TaskApi.Helpers.Attributes;
using TaskApi.Models.Interfaces;

namespace TaskApi.Models
{
    public class User : Entity
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public byte[] PasswordHash { get; set; }

        [Required]
        public byte[] PasswordSalt { get; set; }

        public ICollection<Project> Projects { get; set; } = new Collection<Project>();
    }
}