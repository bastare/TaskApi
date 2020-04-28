using System;

namespace TaskApi.DTOs.TaskDTOs
{
    public class TaskForUpdateDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime Deadline { get; set; }

    }
}