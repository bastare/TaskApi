namespace TaskApi.DTOs.ProjectDTOs.Pagination
{
    public class ProjectParameters
    {
        const int MAX_PAGE_SIZE = 50;
        int pageSize = 10;

        public int PageNumber { get; set; } = 1;
        
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MAX_PAGE_SIZE) ? MAX_PAGE_SIZE : value ;}
        }
        
    }
}