# 🚀 Quick Start Guide

## Getting Started in 5 Minutes

### 1. Test Locally

```bash
# Navigate to the project folder
cd project-website

# Start a local server (choose one):
python3 -m http.server 8000
# OR
python -m SimpleHTTPServer 8000

# Open: http://localhost:8000
```

### 2. Customize Content

Look for `<!-- EDIT:` comments in HTML files. These mark all sections you need to update:

```html
<!-- EDIT: Replace with your project name -->
<span class="project-title">Project Name</span>
```

**Priority edits:**
1. **index.html**: Project name, team members, description
2. **about.html**: Team bios and design story
3. **All assignment pages**: Replace placeholder content

### 3. Add Your Files

```
assets/
├── images/
│   ├── logo.png              ← Your project logo
│   ├── team1.jpg             ← Team photos
│   └── A1-affinity-map.jpg   ← Assignment images
│
├── pdfs/
│   ├── A1-needfinding-slides.pdf  ← Presentation slides
│   └── A11-final-report.pdf       ← Reports
│
└── videos/
    └── concept-video.mp4     ← Videos (if self-hosting)
```

### 4. Update Links

For YouTube videos, edit the assignment page:

```html
<!-- Find the iframe and update the src -->
<iframe src="https://www.youtube.com/embed/YOUR-VIDEO-ID">
```

For Figma prototypes:

```html
<!-- Update the href -->
<a href="https://figma.com/proto/YOUR-LINK" target="_blank">
```

## 📤 Deploy to AFS (Stanford)

### Quick Deploy Commands

```bash
# 1. Upload files
scp -r project-website/* [sunetid]@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/[studio]/[project]/

# 2. Set permissions
ssh [sunetid]@myth.stanford.edu
cd /afs/ir/class/cs147/WWW/projects/[studio]/[project]
fs sa . system:anyuser read
fs sa assets system:anyuser read
fs sa assets/css system:anyuser read
fs sa assets/js system:anyuser read
fs sa assets/images system:anyuser read
fs sa assets/pdfs system:anyuser read
fs sa assignments system:anyuser read

# 3. Access at:
# http://web.stanford.edu/class/cs147/projects/[studio]/[project]/
```

## ✅ Pre-Upload Checklist

- [ ] Tested locally - everything works
- [ ] Updated project name everywhere
- [ ] Added team member names (First + Last initial)
- [ ] Uploaded all images to `assets/images/`
- [ ] Uploaded all PDFs to `assets/pdfs/`
- [ ] Updated video links (YouTube/Vimeo)
- [ ] Updated Figma prototype links
- [ ] All links are relative (no `http://localhost`)
- [ ] Checked on mobile browser

## 🎨 Quick Customization

### Change Colors
Edit `assets/css/style.css`:

```css
:root {
    --color-primary: #8C1515;  /* Change this! */
}
```

### Add Team Member
In `index.html` and `about.html`, copy this block:

```html
<div class="team-member-mini">
    <div class="member-avatar">
        <img src="./assets/images/team1.jpg" alt="Name">
        <div class="avatar-placeholder">
            <i class="fas fa-user"></i>
        </div>
    </div>
    <p class="member-name">First L.</p>
    <p class="member-role">Role</p>
</div>
```

## 🆘 Common Issues

**Images not showing?**
- Check file path: `./assets/images/filename.jpg`
- Check file extension matches actual file
- Clear browser cache

**Mobile menu not working?**
- Check browser console for errors
- Verify `main.js` is loading

**Fonts look weird?**
- Check internet connection (needs CDN access)

## 📱 Test Checklist

Test your site on:
- [ ] Chrome desktop
- [ ] Safari mobile
- [ ] Different screen sizes (resize browser)
- [ ] All navigation links work
- [ ] All download links work
- [ ] Images load correctly

## 🎯 Assignment-Specific Updates

### A1: Needfinding
- [ ] Interview insights
- [ ] Research photos
- [ ] Presentation slides

### A4: Concept Video
- [ ] YouTube embed link
- [ ] Video storyboard images
- [ ] Download link

### A8: High-Fi Prototype
- [ ] Figma prototype link
- [ ] Screenshots of all screens
- [ ] Design system colors

### A11: Final Report
- [ ] Complete PDF report
- [ ] Final presentation slides
- [ ] All metrics updated

## 💡 Pro Tips

1. **Use relative paths**: `./about.html` not `/about.html`
2. **Optimize images**: Keep under 500KB each
3. **Test before deploying**: Save time, avoid errors
4. **Update incrementally**: Don't wait until the last minute
5. **Backup your work**: Keep copies of all files

## 🤝 Team Workflow

1. **One person** sets up initial structure
2. **Each person** adds their content sections
3. **Review together** before final upload
4. **One person** handles AFS deployment
5. **Everyone** tests the live site

---

Need help? Check the full README.md for detailed instructions!
