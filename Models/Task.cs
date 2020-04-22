using System.ComponentModel.DataAnnotations;
using TaskApi.Models.Interfaces;

namespace TaskApi.Models
{
    public class Task : Entity
    {
        [Required]
        public string Name { get; set; }
        public bool Status { get; set; } = default;

        public Project Project { get; set; }
    }
}