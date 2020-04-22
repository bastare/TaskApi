using System.Net;
using TaskApi.Helpers.Status.Interface;

namespace TaskApi.Helpers.Status
{
    public class UnauthorizedError : ApiError
    {
        public UnauthorizedError()
            : base(401, HttpStatusCode.Unauthorized.ToString())
        {
        }

        public UnauthorizedError(string message)
            : base(401, HttpStatusCode.Unauthorized.ToString(), message)
        {
        }
    }
}