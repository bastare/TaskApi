namespace TaskApi.Helpers.Paginattion
{
    public class PaginationHeaders
    {
        public int CurrentPage { get;  }
        public int ItemsPerPage { get; }
        public int TotalItems { get; }
        public int TotalPages { get; }

        public PaginationHeaders(int currentPage, int itemsPerPages, int totalItems, int totalPages)
        {
            CurrentPage = currentPage;
            ItemsPerPage = itemsPerPages;
            TotalItems = totalItems;
            TotalPages = totalPages;
        }
    }
}