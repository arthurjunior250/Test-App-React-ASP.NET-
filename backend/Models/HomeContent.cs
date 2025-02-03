// using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

// namespace Backend.Models;

// [Table("HomeContent")]
// public class HomeContent
// {
//     [Key]
//     public int Id { get; set; }

//     [Required(ErrorMessage = "Welcome message is required")]
//     [StringLength(500, ErrorMessage = "Welcome message cannot be longer than 500 characters")]
//     public string WelcomeMessage { get; set; } = string.Empty;

//     public DateTime LastUpdated { get; set; } = DateTime.UtcNow.ToUniversalTime();
// }

// [Table("Features")]
// public class Feature
// {
//     [Key]
//     public int Id { get; set; }

//     [Required(ErrorMessage = "Title is required")]
//     [StringLength(100, ErrorMessage = "Title cannot be longer than 100 characters")]
//     public string Title { get; set; } = string.Empty;

//     [Required(ErrorMessage = "Description is required")]
//     [StringLength(500, ErrorMessage = "Description cannot be longer than 500 characters")]
//     public string Description { get; set; } = string.Empty;

//     [Required(ErrorMessage = "Icon name is required")]
//     [StringLength(50, ErrorMessage = "Icon name cannot be longer than 50 characters")]
//     public string IconName { get; set; } = string.Empty;
// }

// [Table("CtaSections")]
// public class CtaSection
// {
//     [Key]
//     public int Id { get; set; }

//     [Required(ErrorMessage = "Title is required")]
//     [StringLength(200, ErrorMessage = "Title cannot be longer than 200 characters")]
//     public string Title { get; set; } = string.Empty;

//     [Required(ErrorMessage = "Description is required")]
//     [StringLength(1000, ErrorMessage = "Description cannot be longer than 1000 characters")]
//     public string Description { get; set; } = string.Empty;
// }

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models;

[Table("HomeContent")]
public class HomeContent
{
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Welcome message is required")]
    [StringLength(500)]
    public string WelcomeMessage { get; set; } = string.Empty;
    
    [Required(ErrorMessage = "Platform title is required")]
    [StringLength(200)]
    public string PlatformTitle { get; set; } = string.Empty;
    
    [Required(ErrorMessage = "CTA title is required")]
    [StringLength(200)]
    public string CtaTitle { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string CtaDescription { get; set; } = string.Empty;

    // Hero section CTA
    [StringLength(200)]
    public string HeroCtaText { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string HeroCtaLink { get; set; } = string.Empty;

    // Final CTA section
    [StringLength(200)]
    public string FinalCtaTitle { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string FinalCtaDescription { get; set; } = string.Empty;

    public DateTime LastUpdated { get; set; } = DateTime.UtcNow.ToUniversalTime();
}

[Table("Features")]
public class Feature
{
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Title is required")]
    [StringLength(100)]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Description is required")]
    [StringLength(500)]
    public string Description { get; set; } = string.Empty;

    [Required(ErrorMessage = "Icon name is required")]
    [StringLength(50)]
    public string IconName { get; set; } = string.Empty;

    // Additional fields for features section
    [StringLength(50)]
    public string IconColor { get; set; } = string.Empty;

    public int DisplayOrder { get; set; } = 0;

    public bool IsActive { get; set; } = true;
}

[Table("CtaSections")]
public class CtaSection
{
    [Key]
    public int Id { get; set; }

    [Required(ErrorMessage = "Title is required")]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Description is required")]
    [StringLength(1000)]
    public string Description { get; set; } = string.Empty;

    [StringLength(200)]
    public string ButtonText { get; set; } = string.Empty;

    [StringLength(500)]
    public string ButtonLink { get; set; } = string.Empty;

    public bool IsActive { get; set; } = true;

    public int DisplayOrder { get; set; } = 0;
}