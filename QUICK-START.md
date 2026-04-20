# 🚀 Quick Start: Update Your Portfolio in 5 Minutes

## First-Time Setup (Do This Once)

### 1. Update Your GitHub Username
**File to edit**: `src/components/admin/EditingGuide.tsx`  
**Line 18**: Already updated to `'ajaykumarkanna'` ✅

```typescript
const githubUsername = 'ajaykumarkanna'; // Already set!
```

### 2. Commit Everything to GitHub
```bash
git add .
git commit -m "Setup GitHub-based content management"
git push origin main
```

### 3. Wait for Deployment
GitHub Pages will deploy in 1-2 minutes. Your site will be live at:  
**https://kannaajaykumar.com**

---

## How to Update Your Portfolio (Every Time)

### Method 1: Direct GitHub Edit (Fastest) ⚡

1. **Go to**: https://github.com/ajaykumarkanna/kannaajaykumar.com
2. **Click**: `portfolio-content.json`
3. **Click**: Pencil icon (✏️) in top-right
4. **Edit**: Make your changes
5. **Scroll down**: Click "Commit changes"
6. **Wait**: 1-2 minutes
7. **Done!**: Refresh your site

### Method 2: Use Admin Panel (For Preview) 🎨

1. **Go to**: https://kannaajaykumar.com/admin
2. **Login**: Use your credentials
3. **Edit**: Make changes in the admin panel
4. **Click**: "Export JSON" button
5. **Go to GitHub**: Open `portfolio-content.json`
6. **Paste**: Replace content with your exported JSON
7. **Commit**: Click "Commit changes"
8. **Wait**: 1-2 minutes
9. **Done!**: Refresh your site

---

## Common Updates

### Update Contact Info
Find this section in `portfolio-content.json`:
```json
"contact": {
  "name": "Your Name",
  "title": "Your Title",
  "email": "your@email.com",
  "phone": "+91 XXXXXXXXXX"
}
```

### Add a New Project
Add to the `projects` array:
```json
{
  "id": 1234567890,
  "featured": true,
  "title": "Project Name",
  "company": "Company",
  "duration": "6 months",
  "role": "Your Role",
  "summary": "Description...",
  "impact": "Impact...",
  "deliverables": ["Item 1", "Item 2"],
  "tags": ["Tag 1", "Tag 2"],
  "image": "Thumbnail_Name",
  "category": "Category"
}
```

### Update Work Experience
Find the `experience` array and edit:
```json
{
  "id": 1,
  "title": "Job Title",
  "company": "Company Name",
  "duration": "Jan 2024 - Present",
  "highlights": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

---

## Need Help?

### Visual Guide
Login to admin panel → Click "📖 How to Edit" tab

### Full Documentation
Read: `CONTENT-MANAGEMENT.md`

### Validate JSON
Use: https://jsonlint.com

---

## That's It! 🎉

Your portfolio is now editable from **any device**, **anywhere**, just by editing a file on GitHub. No database, no backend, no complications!
