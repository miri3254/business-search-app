# Business Search App

אפליקצייה לחיפוש עסקים

---

# Project Structure

```txt
business-search-app
├─ backend
└─ mobile
```

---

# Run Backend

```bash
cd backend/BusinessSearch.Api
dotnet run
```

Swagger:

```txt
http://localhost:5176/swagger
```

---

# Run Mobile App

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

ניתן לחפש לפי:

- שם עסק
- קטגוריה
- עיר

---

# Existing Businesses

| Business Name | Category | City |
|---|---|---|
| Pizza Roma | Food | Jerusalem |
| TechFix | Computers | Tel Aviv |
| Flower House | Flowers | Jerusalem |


המערכת כוללת תמיכה ב־Redis Cache עם שמירת תוצאות חיפוש ל־5 דקות.

אם Redis אינו זמין — המערכת ממשיכה לעבוד רגיל.
