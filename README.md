# Business Search App

Full-stack home assignment: a React Native app for searching businesses, backed by an ASP.NET Core Web API.

## Project Structure

```txt
business-search-app
├── backend
│   └── BusinessSearch.Api
└── mobile
    └── BusinessSearchApp
```

## Backend

ASP.NET Core Web API with a `BusinessesController` and a separate `BusinessService`.

### Run Backend

```bash
cd backend/BusinessSearch.Api
dotnet run
```

Swagger:

```txt
http://localhost:5176/swagger
```

Search endpoint:

```txt
GET http://localhost:5176/api/businesses/search?query=pizza
```

Example response:

```json
[
  {
    "id": "1",
    "name": "Pizza Roma",
    "category": "Food",
    "city": "Jerusalem",
    "address": "Jaffa 12",
    "phone": "0501234567"
  }
]
```

## Mobile App

React Native app using Expo.

### Run Mobile

```bash
cd mobile/BusinessSearchApp
npm install
npm start
```

The app includes:

- Search screen with text input and search button
- Basic validation for empty search
- Loader while the request is running
- Error message on API failure
- Results screen with business list
- Empty state when no businesses are found
- Basic separation between `screens`, `components`, and `services`

## Search Fields

The backend searches by:

- Business name
- Category
- City

## Cache

The API uses `IDistributedCache`.

- If a Redis connection string named `Redis` exists, Redis is used.
- If Redis is not configured, the app uses in-memory distributed cache so local development works without extra setup.
- Search results are cached for 5 minutes.

Optional Redis configuration:

```json
{
  "ConnectionStrings": {
    "Redis": "localhost:6379"
  }
}
```

## Existing Businesses

| Business Name | Category | City |
| --- | --- | --- |
| Pizza Roma | Food | Jerusalem |
| TechFix | Computers | Tel Aviv |
| Flower House | Flowers | Jerusalem |

## Notes For Running On a Device

The mobile API service uses:

- `http://localhost:5176` for iOS simulator and web
- `http://10.0.2.2:5176` for Android emulator

For a real physical phone, replace the API base URL in `mobile/BusinessSearchApp/services/businessApi.js` with the computer's local network IP address.
