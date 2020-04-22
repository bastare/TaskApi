using AutoMapper;
using TaskApi.DTOs.UserDTOs;
using TaskApi.Models;

namespace TaskApi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForAuthenticationDTO>().ReverseMap();
            CreateMap<User, UserForAuthorizationDTO>().ReverseMap();
            CreateMap<User, UserForViewDTO>().ReverseMap();
        }
    }
}