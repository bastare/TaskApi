using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using TaskApi.Helpers.Attributes;
using TaskApi.Models.Interfaces;

namespace TaskApi.Models
{
    public class Project : Entity
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public User User { get; set; }
        public ICollection<Task> Tasks { get; set; } = new Collection<Task>();
    }
}