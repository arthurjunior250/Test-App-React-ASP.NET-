// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Backend.Models;
// using Backend.Data;

// namespace Backend.Controllers;
// [ApiController]
// [Route("api/[controller]")]
// public class HomeContentController : ControllerBase
// {
//     private readonly ApplicationDbContext _context;

//     public HomeContentController(ApplicationDbContext context)
//     {
//         _context = context;
//     }

//     [HttpGet]
//     public async Task<IActionResult> GetHomeContent()
//     {
//         var content = await _context.HomeContent.FirstOrDefaultAsync();
//         var features = await _context.Features.ToListAsync();
//         var ctaSection = await _context.CtaSections.FirstOrDefaultAsync();

//         return Ok(new
//         {
//             welcomeMessage = content?.WelcomeMessage,
//             features = features,
//             ctaSection = ctaSection
//         });
//     }

//     [HttpPost]
//     [Route("welcome")]
//     public async Task<IActionResult> UpdateWelcomeMessage([FromBody] HomeContent content)
//     {
//         var existing = await _context.HomeContent.FirstOrDefaultAsync();
//         if (existing == null)
//         {
//             content.LastUpdated = DateTime.UtcNow;
//             _context.HomeContent.Add(content);
//         }
//         else
//         {
//             existing.WelcomeMessage = content.WelcomeMessage;
//             existing.LastUpdated = DateTime.UtcNow;
//         }
        
//         await _context.SaveChangesAsync();
//         return Ok(content);
//     }

//     [HttpPost]
//     [Route("features")]
//     public async Task<IActionResult> UpdateFeature([FromBody] Feature feature)
//     {
//         var existing = await _context.Features.FindAsync(feature.Id);
//         if (existing == null)
//         {
//             _context.Features.Add(feature);
//         }
//         else
//         {
//             _context.Entry(existing).CurrentValues.SetValues(feature);
//         }
        
//         await _context.SaveChangesAsync();
//         return Ok(feature);
//     }

//     [HttpPost]
//     [Route("cta")]
//     public async Task<IActionResult> UpdateCtaSection([FromBody] CtaSection cta)
//     {
//         var existing = await _context.CtaSections.FirstOrDefaultAsync();
//         if (existing == null)
//         {
//             _context.CtaSections.Add(cta);
//         }
//         else
//         {
//             existing.Title = cta.Title;
//             existing.Description = cta.Description;
//         }
        
//         await _context.SaveChangesAsync();
//         return Ok(cta);
//     }
// }


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Backend.Data;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeContentController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public HomeContentController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET all content
    [HttpGet]
    public async Task<IActionResult> GetHomeContent()
    {
        var content = await _context.HomeContent.FirstOrDefaultAsync();
        var features = await _context.Features.OrderBy(f => f.DisplayOrder).ToListAsync();
        var ctaSection = await _context.CtaSections.OrderBy(c => c.DisplayOrder).ToListAsync();

        return Ok(new
        {
            welcomeMessage = content?.WelcomeMessage,
            platformTitle = content?.PlatformTitle,
            ctaTitle = content?.CtaTitle,
            ctaDescription = content?.CtaDescription,
            heroCtaText = content?.HeroCtaText,
            heroCtaLink = content?.HeroCtaLink,
            finalCtaTitle = content?.FinalCtaTitle,
            finalCtaDescription = content?.FinalCtaDescription,
            features = features,
            ctaSection = ctaSection
        });
    }

    // Welcome Message
    [HttpPost("welcome")]
    public async Task<IActionResult> UpdateWelcomeMessage([FromBody] UpdateMessageDto dto)
    {
        var content = await _context.HomeContent.FirstOrDefaultAsync() ?? new HomeContent();
        content.WelcomeMessage = dto.WelcomeMessage;
        content.LastUpdated = DateTime.UtcNow;

        if (content.Id == 0)
            _context.HomeContent.Add(content);
        else
            _context.Entry(content).State = EntityState.Modified;

        await _context.SaveChangesAsync();
        return Ok(content);
    }

    // Platform Title
    [HttpPost("platformtitle")]
    public async Task<IActionResult> UpdatePlatformTitle([FromBody] UpdateTitleDto dto)
    {
        var content = await _context.HomeContent.FirstOrDefaultAsync() ?? new HomeContent();
        content.PlatformTitle = dto.PlatformTitle;
        content.LastUpdated = DateTime.UtcNow;

        if (content.Id == 0)
            _context.HomeContent.Add(content);
        else
            _context.Entry(content).State = EntityState.Modified;

        await _context.SaveChangesAsync();
        return Ok(content);
    }

    // Hero CTA
    [HttpPost("herocta")]
    public async Task<IActionResult> UpdateHeroCta([FromBody] UpdateHeroCtaDto dto)
    {
        var content = await _context.HomeContent.FirstOrDefaultAsync() ?? new HomeContent();
        content.HeroCtaText = dto.HeroCtaText;
        content.HeroCtaLink = dto.HeroCtaLink;
        content.LastUpdated = DateTime.UtcNow;

        if (content.Id == 0)
            _context.HomeContent.Add(content);
        else
            _context.Entry(content).State = EntityState.Modified;

        await _context.SaveChangesAsync();
        return Ok(content);
    }

    // Features
    [HttpGet("features")]
    public async Task<IActionResult> GetFeatures()
    {
        var features = await _context.Features
            .OrderBy(f => f.DisplayOrder)
            .Where(f => f.IsActive)
            .ToListAsync();
        return Ok(features);
    }

    [HttpPost("features")]
    public async Task<IActionResult> UpdateFeature([FromBody] Feature feature)
    {
        var existing = await _context.Features.FindAsync(feature.Id);
        if (existing == null)
        {
            feature.DisplayOrder = await _context.Features.CountAsync();
            _context.Features.Add(feature);
        }
        else
        {
            _context.Entry(existing).CurrentValues.SetValues(feature);
        }
        
        await _context.SaveChangesAsync();
        return Ok(feature);
    }

    [HttpPut("features/order")]
    public async Task<IActionResult> UpdateFeatureOrder([FromBody] List<FeatureOrderDto> orderDtos)
    {
        foreach (var orderDto in orderDtos)
        {
            var feature = await _context.Features.FindAsync(orderDto.Id);
            if (feature != null)
            {
                feature.DisplayOrder = orderDto.Order;
            }
        }
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete("features/{id}")]
    public async Task<IActionResult> DeleteFeature(int id)
    {
        var feature = await _context.Features.FindAsync(id);
        if (feature == null)
            return NotFound();

        _context.Features.Remove(feature);
        await _context.SaveChangesAsync();
        return Ok();
    }

    // CTA Sections
    [HttpGet("cta")]
    public async Task<IActionResult> GetCtaSections()
    {
        var sections = await _context.CtaSections
            .OrderBy(c => c.DisplayOrder)
            .Where(c => c.IsActive)
            .ToListAsync();
        return Ok(sections);
    }

    [HttpPost("cta")]
    public async Task<IActionResult> UpdateCtaSection([FromBody] CtaSection cta)
    {
        var existing = await _context.CtaSections.FindAsync(cta.Id);
        if (existing == null)
        {
            cta.DisplayOrder = await _context.CtaSections.CountAsync();
            _context.CtaSections.Add(cta);
        }
        else
        {
            _context.Entry(existing).CurrentValues.SetValues(cta);
        }
        
        await _context.SaveChangesAsync();
        return Ok(cta);
    }

    [HttpPut("cta/order")]
    public async Task<IActionResult> UpdateCtaSectionOrder([FromBody] List<CtaOrderDto> orderDtos)
    {
        foreach (var orderDto in orderDtos)
        {
            var section = await _context.CtaSections.FindAsync(orderDto.Id);
            if (section != null)
            {
                section.DisplayOrder = orderDto.Order;
            }
        }
        await _context.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete("cta/{id}")]
    public async Task<IActionResult> DeleteCtaSection(int id)
    {
        var section = await _context.CtaSections.FindAsync(id);
        if (section == null)
            return NotFound();

        _context.CtaSections.Remove(section);
        await _context.SaveChangesAsync();
        return Ok();
    }

    // Final CTA Section
    [HttpPost("finalcta")]
    public async Task<IActionResult> UpdateFinalCta([FromBody] UpdateFinalCtaDto dto)
    {
        var content = await _context.HomeContent.FirstOrDefaultAsync() ?? new HomeContent();
        content.FinalCtaTitle = dto.FinalCtaTitle;
        content.FinalCtaDescription = dto.FinalCtaDescription;
        content.LastUpdated = DateTime.UtcNow;

        if (content.Id == 0)
            _context.HomeContent.Add(content);
        else
            _context.Entry(content).State = EntityState.Modified;

        await _context.SaveChangesAsync();
        return Ok(content);
    }
}

// DTOs
public class UpdateMessageDto
{
    [Required]
    [StringLength(500)]
    public string WelcomeMessage { get; set; } = string.Empty;
}

public class UpdateTitleDto
{
    [Required]
    [StringLength(200)]
    public string PlatformTitle { get; set; } = string.Empty;
}

public class UpdateHeroCtaDto
{
    [Required]
    [StringLength(200)]
    public string HeroCtaText { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string HeroCtaLink { get; set; } = string.Empty;
}

public class UpdateFinalCtaDto
{
    [Required]
    [StringLength(200)]
    public string FinalCtaTitle { get; set; } = string.Empty;
    
    [StringLength(500)]
    public string FinalCtaDescription { get; set; } = string.Empty;
}

public class FeatureOrderDto
{
    public int Id { get; set; }
    public int Order { get; set; }
}

public class CtaOrderDto
{
    public int Id { get; set; }
    public int Order { get; set; }
}