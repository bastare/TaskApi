using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace TaskApi.DTOs.ProjectDTOs
{
    public class ProjectForViewDTO
    {
        public string Name { get; set; }
        public ICollection<Models.Task> Tasks { get; set; } = new Collection<Models.Task>();
    }
}