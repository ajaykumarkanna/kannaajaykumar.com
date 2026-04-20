# Portfolio Content Management

## 📋 Overview

This portfolio website uses a **static JSON file** for content management. This means you can update your portfolio from **any device** by simply editing a file on GitHub - no database or backend required!

## 🚀 Quick Start: How to Update Your Portfolio

### Option 1: Direct GitHub Editing (Recommended)

1. **Go to your repository**: https://github.com/YOUR_USERNAME/kannaajaykumar.com
2. **Click on**: `portfolio-content.json`
3. **Click the pencil icon** (✏️) in the top-right
4. **Make your changes** to the content
5. **Scroll down** and click "Commit changes"
6. **Wait 1-2 minutes** for GitHub Pages to deploy automatically

### Option 2: Export/Import via Admin Panel

1. **Login to admin**: Go to kannaajaykumar.com/admin
2. **Make changes** using the admin interface
3. **Click "Export JSON"** to download the file
4. **Go to GitHub** and open `portfolio-content.json`
5. **Paste your updated content** and commit changes

## 📁 File Structure

```
portfolio-content.json          ← Main content file (edit this!)
├── contact                     ← Your name, email, phone, etc.
├── stats                       ← Key numbers (projects, clients, etc.)
├── about                       ← Background, specialization, approach
├── projects                    ← Array of your projects
├── experience                  ← Work history
├── education                   ← Education details
├── certifications              ← Certifications list
├── activities                  ← Activities & events
├── skills                      ← Skills categorized
├── hobbies                     ← Personal hobbies
├── clients                     ← Client logos
├── testimonials                ← Client testimonials
└── websitesWithAjay            ← Websites with Ajay section
```

## 📝 JSON Editing Basics

### Editing Text
```json
{
  "contact": {
    "name": "Your Name",
    "title": "Your Job Title",
    "email": "your@email.com"
  }
}
```

### Adding a New Project
```json
{
  "projects": [
    {
      "id": 1234567890,
      "featured": true,
      "title": "My New Project",
      "company": "Company Name",
      "duration": "6 months",
      "role": "UI/UX Designer",
      "summary": "Project description...",
      "impact": "Business impact...",
      "deliverables": ["Deliverable 1", "Deliverable 2"],
      "tags": ["Tag 1", "Tag 2"],
      "image": "Thumbnail_ProjectName",
      "category": "Category",
      "externalLink": "https://example.com"
    }
  ]
}
```

### Important JSON Rules
- ✅ Always use **double quotes** for strings: `"name": "Value"`
- ✅ Separate items with **commas**: `"item1", "item2"`
- ✅ **No trailing comma** after the last item
- ✅ Escape quotes inside text: `"He said \"hello\""`
- ✅ Use `\n` for new lines in text

## 💡 Pro Tips

1. **Use GitHub Mobile App**: Edit files directly from your phone!
2. **Preview Changes**: Use the admin panel to preview before committing to GitHub
3. **Version History**: Made a mistake? Click "History" in GitHub to restore previous versions
4. **Bookmark the File**: Bookmark the direct edit link for quick access
5. **Test Locally**: Run `npm run dev` to test changes locally before deploying

## 🔧 Development

### Running Locally
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### How Data Loading Works
1. App loads `portfolio-content.json` at runtime via fetch
2. Falls back to default data in `portfolio-data.ts` if file not found
3. Changes to `portfolio-content.json` are immediately live after GitHub Pages deployment

## ⚠️ Important Notes

- **DO NOT** modify `portfolio-data.ts` - it's only for fallback and asset imports
- **DO** modify `portfolio-content.json` - this is your content source
- **DO NOT** commit sensitive information (passwords, API keys) to the JSON file
- **DO** validate your JSON before committing (use jsonlint.com)

## 🆘 Troubleshooting

### Changes Not Showing Up?
1. Wait 1-2 minutes for GitHub Pages to deploy
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check GitHub Actions for deployment errors

### JSON Syntax Error?
1. Use a JSON validator: https://jsonlint.com
2. Check for missing commas or quotes
3. Ensure all brackets are properly closed

### Need Help?
Check the "📖 How to Edit" tab in the Admin Panel for detailed instructions!

## 📞 Support

For technical issues or questions about the content management system, refer to the admin panel guide or check the repository issues.
