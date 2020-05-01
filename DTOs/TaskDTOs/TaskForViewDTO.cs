using System;
using TaskApi.Models;

namespace TaskApi.DTOs.TaskDTOs
{
    public class TaskForViewDTO
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime Deadline { get; set; }
        public Status Status { get; set; }
        public int Priority { get; set; }
    }
}