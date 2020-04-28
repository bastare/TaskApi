using TaskApi.Models;

namespace TaskApi.DTOs.TaskDTOs
{
    public class TaskForUpdateStatus
    {
        public long Id { get; set; }
        public Status Status { get; set; }
    }
}