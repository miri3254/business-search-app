using BusinessSearch.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace BusinessSearch.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BusinessesController : ControllerBase
{
    private readonly BusinessService _businessService;

    public BusinessesController(BusinessService businessService)
    {
        _businessService = businessService;
    }

    [HttpGet("search")]
    public IActionResult Search([FromQuery] string query)
    {
        var results = _businessService.Search(query);
        return Ok(results);
    }
}