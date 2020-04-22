using System;

using Microsoft.AspNetCore.Mvc;

namespace Task.Helpers
{
    public static class Extensions
    {
        public static string Controller(this ControllerBase controller) =>
            controller.ControllerContext.RouteData.Values["controller"]?.ToString()
                ?? throw new ArgumentNullException(nameof(controller), "RouteData hasn`t value");
    }
}