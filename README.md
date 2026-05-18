# Business Search App

אפליקצייה לחיפוש עסקים.

הפרויקט כולל:

- אפליקציית React Native עם Expo
- Web API ב־ASP.NET Core
- חיפוש עסקים לפי:
  - שם עסק
  - קטגוריה
  - עיר

---

# מבנה הפרויקט

```txt
business-search-app
├─ backend
│  └─ BusinessSearch.Api
└─ mobile
   └─ BusinessSearchApp
```

---

# הרצת צד שרת

```bash
cd backend/BusinessSearch.Api
dotnet run
```

כתובת ה־API:

```txt
GET /api/businesses/search?query=pizza
```

דוגמה:

```txt
http://localhost:5176/api/businesses/search?query=pizza
```

---

# הרצת צד לקוח

```bash
cd mobile/BusinessSearchApp
npm install
npm start
```

לאחר מכן ניתן ללחוץ:

```txt
w
```

כדי להריץ בדפדפן.

---

# הערות

- הנתונים נשמרים כרשימה hard-coded
