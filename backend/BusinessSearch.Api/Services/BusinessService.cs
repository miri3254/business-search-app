using BusinessSearch.Api.Models;

namespace BusinessSearch.Api.Services;

public class BusinessService
{
    private readonly List<Business> _businesses =
    [
        new() { Id = "1", Name = "Pizza Roma", Category = "Food", City = "Jerusalem", Address = "Jaffa 12", Phone = "0501234567" },
        new() { Id = "2", Name = "TechFix", Category = "Computers", City = "Tel Aviv", Address = "Dizengoff 80", Phone = "0522222222" },
        new() { Id = "3", Name = "Flower House", Category = "Flowers", City = "Jerusalem", Address = "King George 5", Phone = "0533333333" }
    ];

    public List<Business> Search(string query)
    {
        if (string.IsNullOrWhiteSpace(query))
            return [];

        query = query.Trim();

        return _businesses
            .Where(b =>
                b.Name.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                b.Category.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                b.City.Contains(query, StringComparison.OrdinalIgnoreCase))
            .ToList();
    }
}
