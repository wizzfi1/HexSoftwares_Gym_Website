# WizFIT Gym Website

A responsive, single-page gym website for **WizFIT**, featuring modern design, animations, and mobile support.

---

## 🚀 Features

- 🖼️ Hero section with animated intro and gym background
- 🧾 Sections for Facilities, Services, and Membership Plans
- 📱 Fully responsive with mobile navigation toggle
- 🌙 Optional dark mode support (CSS ready)
- 📷 Lazy-loaded, optimized local images
- ⚡ Smooth CSS transitions and animation effects

---

## 📁 Project Structure
```
HexSoftwares_Gym_Website/
├── index.html # Main HTML structure
├── style.css # Styling with animations & responsiveness
├── script.js # Nav toggle and interactivity
└── images/ # Compressed local image assets

```


---

## 🛠️ Tech Stack

- HTML5
- CSS3 (Flexbox + Grid)
- JavaScript (vanilla)
- GitHub Actions + GitHub Pages for deployment

---

## 🔧 Setup & Run Locally

```bash
git clone https://github.com/yourusername/HexSoftwares_Gym_Website.git
cd HexSoftwares_Gym_Website
# Open index.html in any browser
```

🚢 Deploy with GitHub Actions

-Push to main branch

-dist/ folder is built and auto-deployed using peaceiris/actions-gh-pages

# .github/workflows/deploy.yml
```
- name: Build static site
  run: |
    mkdir dist
    cp index.html style.css script.js -t dist/
```

📷 Image Sources
All images are local assets compressed and optimized using squoosh.app.


📄 License
MIT License — free to use, modify, and share.

