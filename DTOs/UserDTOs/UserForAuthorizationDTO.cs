using System.ComponentModel.DataAnnotations;
using TaskApi.Helpers.Attributes;
using TaskApi.Models.Interfaces;

namespace TaskApi.DTOs.UserDTOs
{
    public class UserForAuthorizationDTO
    {
        [Required]
        [RegularExpression(@"^[a-z0-9_-]{3,16}$")]
        public string UserName { get; set; }

        [Required]
        [RegularExpression(@"^[a-z0-9_-]{6,18}$")]
        public string Password { get; set; }
    }
}