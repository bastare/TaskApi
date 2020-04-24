using System;
using System.ComponentModel.DataAnnotations;
using TaskApi.Models.Interfaces;

namespace TaskApi.Models
{
    public class Task : Entity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime? Deadline { get; set; }

        public Status Status { get; set; } = Status.Onway;
        public Project Project { get; set; }
    }

    public enum Status
    {
        Done, Expired, Onway
    }
}