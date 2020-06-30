using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using TaskApi.Helpers.Attributes;
using TaskApi.Models.Interfaces;

namespace TaskApi.Models
{
    public class Project : IEntity
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public string Name { get; set; }

        public User User { get; set; }
        public ICollection<Task> Tasks { get; set; } = new Collection<Task>();
    }
}