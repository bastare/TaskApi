using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.Controllers;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.Extensions.Primitives;
using TaskApi.Helpers.Status.Interfaces;

namespace TaskApi.Filter
{
    public class NullValidationFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {


        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            foreach (var value in context.ActionArguments.Values)
            {
                if (value is IEnumerable valueCollection)
                {
                    foreach (var currentValue in valueCollection)
                        foreach (var prop in currentValue.GetType().GetProperties())
                            if (prop.GetValue(value) is null)
                            {
                                context.Result = new BadRequestObjectResult(new BadRequestError(
                                    $@"Value '{prop.Name}' as {context.ActionDescriptor.Parameters.
                                        FirstOrDefault(x => IsInvalidParameter(context, x.Name))?.BindingInfo.BindingSource.DisplayName
                                            ?? "[No binding]"} of '{value.GetType().FullName}' in '{context.ActionDescriptor.DisplayName}': is null"
                                ));

                                return;
                            }
                }
                else
                {
                    foreach (var prop in value.GetType().GetProperties())
                        if (prop.GetValue(value) is null)
                        {
                            context.Result = new BadRequestObjectResult(new BadRequestError(
                                    $@"Value '{prop.Name}' as {context.ActionDescriptor.Parameters.
                                        FirstOrDefault(x => IsInvalidParameter(context, x.Name))?.BindingInfo.BindingSource.DisplayName
                                            ?? "[No binding]"} of '{value.GetType().FullName}' in '{context.ActionDescriptor.DisplayName}': is null"
                                ));

                            return;
                        }
                }
            }
        }

        bool IsInvalidParameter(ActionExecutingContext context, string compareParameter)
        {
            var actionName = (context.ActionDescriptor as ControllerActionDescriptor)?.ActionName
                ?? throw new ArgumentNullException("Bad cast", new InvalidCastException());

            var parameters = context.Controller.GetType().GetMethod(actionName).GetParameters();

            return parameters.Any(x => x?.Name == compareParameter);
        }

    }
}