using TaskApi.Models.Interfaces;

namespace TaskApi.DTOs.UserDTOs
{
    public class UserForAuthenticationDTO
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}