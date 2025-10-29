# CS 147 Project Website

Professional website for documenting our CS 147 (Introduction to Human-Computer Interaction) project at Stanford University, Autumn 2025.

## 📋 Overview

This website showcases our complete design process, from initial needfinding research through final high-fidelity prototype. It follows Prof. James Landay's Assignment 3 guidelines and is designed for deployment on Stanford's AFS server.

## 🗂️ Project Structure

```
project-website/
├── index.html                  # Home page - Project overview
├── about.html                  # Team bios and design story
├── deliverables.html           # Central hub for all assignments
│
├── assignments/                # Individual assignment pages
│   ├── A1-needfinding.html
│   ├── A2-povs.html
│   ├── A4-concept-video.html
│   ├── A5-lowfi.html
│   ├── A6-mediumfi.html
│   ├── A8-highfi.html
│   ├── A9-heuristics.html
│   ├── A10-poster.html
│   └── A11-finalreport.html
│
├── assets/
│   ├── css/
│   │   └── style.css           # Main stylesheet (responsive)
│   ├── js/
│   │   └── main.js             # Interactive navigation
│   ├── images/                 # Project images, screenshots, mockups
│   ├── videos/                 # Video files (if self-hosted)
│   └── pdfs/                   # Downloadable slides, reports
│
└── README.md                   # This file
```

## ✏️ Customizing Your Content

### 1. Update Project Information

**In all HTML files**, search for `<!-- EDIT:` comments to find sections that need customization:

- **Project name and logo**: Replace "Project Name" and update logo path
- **Team members**: Update names (First Name + Last Initial), roles, and bios
- **Project description**: Replace placeholder text with your actual content

### 2. Add Your Media Files

#### Images
Place your images in `assets/images/` with these naming conventions:

```
assets/images/
├── logo.png                    # Your project logo
├── hero-mockup.png            # Hero section image
├── team1.jpg, team2.jpg...    # Team photos
├── A1-affinity-map.jpg        # Assignment-specific images
├── A4-frame1.jpg              # Video storyboard frames
├── A5-screen1.jpg             # Prototype screenshots
└── A8-hero.png                # High-fi showcase images
```

#### PDFs
Add your presentation slides and reports to `assets/pdfs/`:

```
assets/pdfs/
├── A1-needfinding-slides.pdf
├── A2-povs-slides.pdf
├── A4-concept-video-slides.pdf
└── A11-final-report.pdf
```

#### Videos
- For YouTube/Vimeo: Update the iframe `src` in the HTML
- For self-hosted: Place MP4 files in `assets/videos/`

### 3. Update Colors (Optional)

To customize the color scheme, edit `assets/css/style.css` and change these CSS variables:

```css
:root {
    --color-primary: #8C1515;          /* Main brand color */
    --color-primary-dark: #6E0F0F;     /* Darker shade */
    --color-primary-light: #B83A4B;    /* Lighter shade */
    /* ... */
}
```

## 🚀 Local Testing

### Option 1: Simple HTTP Server (Python)

```bash
# Navigate to the project directory
cd project-website

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open in browser: http://localhost:8000
```

### Option 2: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js http-server

```bash
npm install -g http-server
cd project-website
http-server -p 8000
```

## 📤 Deploying to Stanford AFS

### Step 1: Prepare Your Files

1. **Test locally first** to ensure everything works
2. **Check all links are relative** (no `http://localhost` or absolute paths)
3. **Verify all images and PDFs are included**

### Step 2: Connect to AFS

```bash
# SSH into Stanford servers
ssh [your-sunetid]@myth.stanford.edu

# Navigate to the CS 147 web directory
cd /afs/ir/class/cs147/WWW/projects/

# Create your studio and project directories
mkdir -p [studio-name]/[project-name]
cd [studio-name]/[project-name]
```

### Step 3: Upload Files

**Option A: Using SCP (from your local machine)**

```bash
# Upload the entire project directory
scp -r project-website/* [your-sunetid]@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/[studio-name]/[project-name]/
```

**Option B: Using rsync (recommended for updates)**

```bash
# Sync files (only uploads changed files)
rsync -avz --progress project-website/ [your-sunetid]@myth.stanford.edu:/afs/ir/class/cs147/WWW/projects/[studio-name]/[project-name]/
```

**Option C: Using an FTP client**
- Use Cyberduck, FileZilla, or similar
- Connect via SFTP to `myth.stanford.edu`
- Navigate to `/afs/ir/class/cs147/WWW/projects/[studio-name]/[project-name]/`
- Upload files

### Step 4: Set Permissions

```bash
# SSH into Stanford servers
ssh [your-sunetid]@myth.stanford.edu

# Navigate to your project directory
cd /afs/ir/class/cs147/WWW/projects/[studio-name]/[project-name]

# Set proper permissions for web access
fs sa . system:anyuser read
fs sa assets system:anyuser read
fs sa assets/css system:anyuser read
fs sa assets/js system:anyuser read
fs sa assets/images system:anyuser read
fs sa assets/videos system:anyuser read
fs sa assets/pdfs system:anyuser read
fs sa assignments system:anyuser read

# Verify permissions
fs la
```

### Step 5: Access Your Website

Your site will be available at:
```
http://web.stanford.edu/class/cs147/projects/[studio-name]/[project-name]/
```

## ✅ Pre-Deployment Checklist

- [ ] All placeholder text replaced with your content
- [ ] Team member names updated (First + Last initial only)
- [ ] All images uploaded and paths verified
- [ ] PDFs and presentation slides uploaded
- [ ] Video links tested (YouTube/Vimeo embeds)
- [ ] All links are relative (no absolute paths)
- [ ] Tested on mobile and desktop browsers
- [ ] Checked accessibility (color contrast, alt text)
- [ ] Verified no broken links
- [ ] AFS permissions set correctly

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 480px, 768px, 968px
- Touch-friendly navigation

### Accessibility
- Semantic HTML5 structure
- ARIA labels where needed
- High color contrast
- Keyboard navigation support
- Alt text for images
- Focus states for interactive elements

### Performance
- Optimized CSS with CSS variables
- Lazy loading for images
- Minimal JavaScript
- No external dependencies (except CDN fonts/icons)

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid
- **JavaScript (ES6)**: Vanilla JS for interactions
- **Google Fonts**: Inter font family
- **Font Awesome 6**: Icons

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### External CDN Resources
- Google Fonts: https://fonts.googleapis.com
- Font Awesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/

## 📝 Content Guidelines

### Writing Style
- Concise and clear
- Professional but approachable
- Focus on user needs and insights
- Use active voice

### Image Guidelines
- **Format**: JPG for photos, PNG for graphics/screenshots
- **Size**: Max 1920px width, optimize for web
- **Alt text**: Descriptive for accessibility

### Video Guidelines
- Host on YouTube or Vimeo for better performance
- Provide downloadable MP4 backup if required
- Include captions/subtitles for accessibility

## 🐛 Troubleshooting

### Images Not Showing
- Check file paths are correct and relative
- Verify file extensions match actual files (.jpg vs .JPG)
- Ensure AFS permissions are set correctly
- Clear browser cache

### Links Not Working
- Use relative paths: `./about.html` not `/about.html`
- Check for typos in file names
- Verify files exist in correct directories

### Mobile Menu Not Working
- Check `main.js` is loading correctly
- Open browser console for JavaScript errors
- Ensure IDs match: `mobile-toggle` and `nav-menu`

### Fonts/Icons Not Loading
- Verify internet connection (CDN resources)
- Check browser console for blocked resources
- Stanford network may block some CDNs - test off-campus

## 📚 Resources

### CS 147 Course Resources
- Course Website: http://cs147.stanford.edu
- Stanford HCI Group: http://hci.stanford.edu

### Web Development
- MDN Web Docs: https://developer.mozilla.org
- CSS Tricks: https://css-tricks.com
- A11Y Project: https://www.a11yproject.com

### Stanford AFS Documentation
- AFS at Stanford: https://uit.stanford.edu/service/afs
- Stanford Web Hosting: https://uit.stanford.edu/service/web

## 🤝 Support

For website issues:
1. Check this README first
2. Test locally before deploying
3. Consult Stanford IT for AFS/server issues
4. Ask teaching team for assignment-specific questions

## 📄 License

This template is created for educational purposes for Stanford CS 147 students.
Feel free to modify and use for your course project.

---

**Built with ❤️ for CS 147 | Stanford University | Autumn 2025**
