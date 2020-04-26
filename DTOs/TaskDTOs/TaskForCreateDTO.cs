using System;
namespace TaskApi.DTOs.TaskDTOs
{
    public class TaskForCreateDTO
    {
        public string Name { get; set; }
        public DateTime Deadline { get; set; }
        public int Priority { get; set; }
    }
}