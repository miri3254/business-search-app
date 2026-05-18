# Business Search App

אפליקציית Full Stack פשוטה לחיפוש עסקים, שנבנתה באמצעות:

- React Native / Expo
- ASP.NET Core Web API
- Redis Cache (Bonus)

האפליקציה מאפשרת למשתמש לבצע חיפוש חופשי של עסקים ולקבל רשימת תוצאות תואמות.

---

# Features

## React Native App

- מסך חיפוש עסקים
- ולידציה לחיפוש ריק
- Loader שקוף בזמן טעינה
- טיפול בשגיאות
- הודעת "אין תוצאות"
- רשימת עסקים

לכל עסק מוצגים:

- שם העסק
- קטגוריה
- עיר
- כתובת
- טלפון

---

# Project Structure

```txt
business-search-app
├─ backend
│  └─ BusinessSearch.Api
└─ mobile
   └─ BusinessSearchApp
```

---

# Backend — ASP.NET Core Web API

## הרצת השרת

```bash
cd backend/BusinessSearch.Api
dotnet run
```

השרת רץ בכתובת:

```txt
http://localhost:5176
```

Swagger:

```txt
http://localhost:5176/swagger
```

---

# Search Endpoint

```txt
GET /api/businesses/search?query=pizza
```

דוגמה:

```txt
http://localhost:5176/api/businesses/search?query=pizza
```

---

# Mobile App — React Native / Expo

## הרצת האפליקציה

```bash
cd mobile/BusinessSearchApp
npm install
npm start
```

לאחר מכן ללחוץ:

```txt
w
```

כדי להריץ בדפדפן.

---

# Supported Search Types

המערכת תומכת בחיפוש לפי:

- שם עסק
- קטגוריה
- עיר

---

# Existing Businesses

| Business Name | Category | City | Address |
|---|---|---|---|
| Pizza Roma | Food | Jerusalem | Jaffa 12 |
| TechFix | Computers | Tel Aviv | Dizengoff 80 |
| Flower House | Flowers | Jerusalem | King George 5 |

---

# Example Search Inputs

## חיפוש לפי שם מלא

```txt
Pizza Roma
TechFix
Flower House
```

## חיפוש חלקי

```txt
pizza
roma
tech
flower
```

## חיפוש לפי קטגוריה

```txt
food
computers
flowers
```

## חיפוש לפי עיר

```txt
jerusalem
tel aviv
```

---

# Example Successful Queries

```txt
Pizza Roma
pizza
food
Jerusalem
TechFix
computers
Tel Aviv
Flower House
flowers
```

---

# Example API Response

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

---

# Redis Cache (Bonus)

נוספה תמיכה ב־Redis Cache כבונוס.

השרת:

- בודק האם תוצאות החיפוש קיימות ב־Cache
- מחזיר תוצאות מה־Cache אם קיימות
- שומר תוצאות חדשות ל־5 דקות

אם Redis אינו זמין, המערכת ממשיכה לעבוד רגיל ללא Cache.

## הרצת Redis באמצעות Docker

```bash
docker run --name business-redis -p 6379:6379 -d redis
```

---

# Notes

אם מריצים את אפליקציית המובייל על טלפון פיזי, יש להחליף את:

```txt
localhost
```

בקובץ:

```txt
src/services/businessService.ts
```

לכתובת ה־IP המקומית של המחשב שמריץ את ה־Backend.
