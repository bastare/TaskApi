using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TaskApi.Migrations
{
    public partial class addHash : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Password",
                table: "User");

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "User",
                type: "tinyblob",
                nullable: false);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "User",
                type: "tinyblob",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "User");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "User",
                type: "varchar(16)",
                nullable: false,
                defaultValue: "");
        }
    }
}
