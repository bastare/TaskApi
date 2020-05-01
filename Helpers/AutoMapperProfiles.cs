using AutoMapper;
using TaskApi.DTOs.ProjectDTOs;
using TaskApi.DTOs.TaskDTOs;
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

            CreateMap<Project, ProjectForViewDTO>().ReverseMap();
            CreateMap<Project, ProjectForCreateDTO>().ReverseMap();

            CreateMap<Models.Task, TaskForCreateDTO>().ReverseMap();
            CreateMap<Models.Task, TaskForViewDTO>().ReverseMap();
        }
    }
}