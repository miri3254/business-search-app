using System.Text.Json;
using BusinessSearch.Api.Models;
using BusinessSearch.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;

namespace BusinessSearch.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BusinessesController : ControllerBase
{
    private readonly BusinessService _businessService;
    private readonly IDistributedCache _cache;

    public BusinessesController(
        BusinessService businessService,
        IDistributedCache cache)
    {
        _businessService = businessService;
        _cache = cache;
    }

    [HttpGet("search")]
    public async Task<IActionResult> Search([FromQuery] string query)
    {
        if (string.IsNullOrWhiteSpace(query))
        {
            return BadRequest("Search query is required");
        }

        var normalizedQuery = query.Trim().ToLower();

        var cacheKey = $"business_search_{normalizedQuery}";

        try
        {
            var cachedData = await _cache.GetStringAsync(cacheKey);

            if (!string.IsNullOrEmpty(cachedData))
            {
                var cachedResults =
                    JsonSerializer.Deserialize<List<Business>>(cachedData);

                Console.WriteLine("Returned from Redis cache");

                return Ok(cachedResults);
            }
        }
        catch
        {
            Console.WriteLine("Redis unavailable - continuing without cache");
        }

        var results = _businessService.Search(query);

        try
        {
            var serializedResults =
                JsonSerializer.Serialize(results);

            await _cache.SetStringAsync(
                cacheKey,
                serializedResults,
                new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow =
                        TimeSpan.FromMinutes(5)
                });

            Console.WriteLine("Saved to Redis cache");
        }
        catch
        {
            Console.WriteLine("Failed to save to Redis");
        }

        return Ok(results);
    }
}