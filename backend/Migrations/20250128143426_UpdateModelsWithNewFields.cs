using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelsWithNewFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CtaDescription",
                table: "HomeContent",
                type: "varchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "CtaTitle",
                table: "HomeContent",
                type: "varchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "FinalCtaDescription",
                table: "HomeContent",
                type: "varchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "FinalCtaTitle",
                table: "HomeContent",
                type: "varchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "HeroCtaLink",
                table: "HomeContent",
                type: "varchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "HeroCtaText",
                table: "HomeContent",
                type: "varchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "PlatformTitle",
                table: "HomeContent",
                type: "varchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "DisplayOrder",
                table: "Features",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "IconColor",
                table: "Features",
                type: "varchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Features",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ButtonLink",
                table: "CtaSections",
                type: "varchar(500)",
                maxLength: 500,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "ButtonText",
                table: "CtaSections",
                type: "varchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "DisplayOrder",
                table: "CtaSections",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "CtaSections",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CtaDescription",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "CtaTitle",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "FinalCtaDescription",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "FinalCtaTitle",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "HeroCtaLink",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "HeroCtaText",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "PlatformTitle",
                table: "HomeContent");

            migrationBuilder.DropColumn(
                name: "DisplayOrder",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "IconColor",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Features");

            migrationBuilder.DropColumn(
                name: "ButtonLink",
                table: "CtaSections");

            migrationBuilder.DropColumn(
                name: "ButtonText",
                table: "CtaSections");

            migrationBuilder.DropColumn(
                name: "DisplayOrder",
                table: "CtaSections");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "CtaSections");
        }
    }
}
