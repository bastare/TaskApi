using System;

using Microsoft.AspNetCore.Mvc;

namespace Task.Helpers
{
    public static class Extensions
    {
        /// <summary>
        /// Get name of current controller
        /// </summary>
        /// <param name="controller"></param>
        /// <returns>name of controller</returns>
        public static string Controller(this ControllerBase controller) =>
            controller.ControllerContext.RouteData.Values["controller"]?.ToString()
                ?? throw new ArgumentNullException(nameof(controller), "RouteData hasn`t value");
    }
}