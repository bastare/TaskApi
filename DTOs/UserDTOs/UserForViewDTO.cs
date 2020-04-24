using System.Collections.Generic;
using TaskApi.Models;

namespace TaskApi.DTOs.UserDTOs
{
    public class UserForViewDTO
    {
        public long Id { get; set; }
        public string Login { get; set; }
        public ICollection<Project> Projects { get; set; }
    }
}