using System.Collections;
using System.Collections.Generic;

namespace TaskApi.DTOs.TaskDTOs
{
    public class TaskForUpdatePriority
    {
        public ICollection<Task> Tasks { get; set; }
    }

    public class Task
    {
        public long Id { get; set; }
        public int Priority { get; set; }
    }
}