using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

using TaskApi.DTOs.Interfaces;


namespace TaskApi.Helpers.Attributes
{
    public class UserNullValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext) =>
            (value is IUser user)
                ? user switch
                {
                    { Login: null, Password: null } => new ValidationResult($"{nameof(user.Login)} & {nameof(user.Password)} is null"),
                    { Login: null } => new ValidationResult($"{nameof(user.Login)} is null"),
                    { Password: null } => new ValidationResult($"{nameof(user.Password)} is null"),
                    _ => ValidationResult.Success
                }

                : throw new ArgumentNullException("Bad cast", new InvalidCastException());
    }

    public class UserPatternValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext) =>
             (value is IUser user)
                ? user switch
                {
                    IUser u when !(Regex.IsMatch(u.Login ?? String.Empty, @"^[a-z0-9_-]{3,16}$") || Regex.IsMatch(u.Password ?? String.Empty, @"^[a-z0-9_-]{6,18}$")) =>
                        new ValidationResult($"{nameof(user.Login)} & {nameof(user.Password)} is invalid"),
                    IUser u when !(Regex.IsMatch(u.Login ?? String.Empty, @"^[a-z0-9_-]{3,16}$")) =>
                        new ValidationResult($"{nameof(user.Login)} is invalid"),
                    IUser u when !(Regex.IsMatch(u.Password ?? String.Empty, @"^[a-z0-9_-]{6,18}$")) =>
                        new ValidationResult($"{nameof(user.Password)} is invalid"),
                    _ => ValidationResult.Success
                }

                : throw new ArgumentNullException("Bad cast", new InvalidCastException());
    }
}