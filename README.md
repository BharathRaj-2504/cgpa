# 🎓 REC CGPA Predictor

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform: GitHub Pages](https://img.shields.io/badge/Platform-GitHub%20Pages-brightgreen.svg)](https://pages.github.com/)
[![Stack: Vanilla JS](https://img.shields.io/badge/Stack-Pure%20HTML/CSS/JS-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-success.svg)](#)

A lightweight, professional-grade **"What-If" Semester GPA Analyzer** designed specifically for the students of **Rajalakshmi Engineering College (REC)**. Built with a modular Vanilla JavaScript architecture, this tool offers instant GPA calculation and strategic optimization suggestions without any backend dependencies.

---

## 🚀 Live Demo
[Check out the REC CGPA Predictor Live on GitHub Pages](https://bharathraj-2504.github.io/cgpa/)

---

## ✨ Features

- 🎯 **What-If GPA Analyzer**: Interactive suggestions to upgrade specific grades and see the exact, cumulative impact on your semester GPA.
- 📉 **Real-Time Calculation**: Instant updates to Semester GPA, Total Credits, and Grade Points as you type or toggle.
- 🔄 **Setup vs. Analysis Modes**: A clean UI flow that transitions from a data entry editor to a focused results dashboard.
- 📱 **Premium Mobile UX**: App-like mobile experience with vertical input stacking, touch-friendly targets, and a sticky action button.
- 🌓 **Dynamic Theme Engine**: High-end dark and light mode support with persistent user preferences.
- 💾 **Data Persistence**: Automatically saves your subjects and themes locally using the Browser Storage API.
- 📐 **REC-Standard Logic**: Pre-configured with the official Rajalakshmi Engineering College grading system.
- 🎨 **Modern Aesthetics**: Glassmorphism, smooth cubic-bezier animations, and a refined typography hierarchy.
- ⌨️ **Keyboard Accessible**: Full accessibility support for power users and screen readers.

---

## 🎯 The GPA Recommendation System

The heart of the project is the **What-If Analysis Engine**. It doesn't just calculate your current GPA; it helps you strategize for a better one.

### How it Works:
1. **Analysis**: The engine scans your current grades and identifies potential upgrades (e.g., `B+ → A`, `A → A+`, `A+ → O`).
2. **Impact Calculation**: For every possible upgrade, it calculates the **Potential Gain** in your Semester GPA.
3. **Interactive Toggling**: Users can toggle these upgrades using mobile-friendly switches.
4. **Cumulative Feedback**: Toggling an improvement instantly updates the overall GPA and displays a "Total Gain" badge (e.g., **+0.17 Gain**) to visualize the cumulative improvement.

---

## 🔄 User Workflow

### Step 1: Setup
Add your semester subjects using the dynamic editor. Use random placeholders like "Computer Networks" for inspiration.
### Step 2: Input
Enter the credits and your expected grades for each subject.
### Step 3: Calculate
Click **Calculate GPA**. The editor smoothly collapses into a compact summary, shifting the app into **Analysis Mode**.
### Step 4: Optimize
Review your **Semester Result** and the **Improvement Suggestions**.
### Step 5: Simulate
Toggle the grade upgrades to simulate better scenarios and find the most efficient path to your target GPA.

---

## 📱 Mobile Responsiveness

The REC CGPA Predictor is built with a **Mobile-First** philosophy:
- **Vertical Stacking**: Inputs stack vertically on phones to maximize width and tap accuracy.
- **Sticky Actions**: The "Calculate GPA" button stays fixed at the bottom for effortless one-handed use.
- **Fluid Scaling**: Typography and metrics scale dynamically to prevent overflow on small screens.
- **Touch Targets**: All interactive elements maintain a minimum `48px` hit area.

---

## 🏗️ Architecture & Folder Structure

The project follows a **Modular JavaScript Architecture** (ES6 Modules) to ensure high scalability and separation of concerns.

```text
/project-root
│
├── index.html          # Semantic HTML5 structure & View layer
├── README.md           # Portfolio-grade documentation
├── css/
│   └── style.css       # Design system, Animations, and Layouts
├── js/
│   ├── app.js          # Main Orchestrator: State management & events
│   ├── ui.js           # View Logic: DOM manipulation & mode transitions
│   ├── cgpa.js         # Engine: GPA formulas & analysis logic
│   ├── storage.js      # Data Layer: LocalStorage persistence
│   └── theme.js        # UI Styling: Light/Dark mode management
└── assets/             # Media assets and screenshots
```

### Key Modules:
- **`app.js`**: Manages the application lifecycle and mode transitions (Setup vs. Analysis).
- **`cgpa.js`**: Contains the core "What-If" logic and official REC grade mappings.
- **`ui.js`**: Handles the smooth expand/collapse animations and interactive analyzer rendering.

---

## 📸 Screenshots

| Desktop Analysis Mode | Mobile Setup Mode | Dark Mode Dashboard |
|:---:|:---:|:---:|
| ![Desktop View](#placeholder) | ![Mobile View](#placeholder) | ![Dark Mode](#placeholder) |

*(Note: Add your screenshots to the `/assets` folder to display them here)*

---

## 🛠️ Setup & Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/BharathRaj-2504/cgpa.git
   ```
2. **Run Locally**:
   Simply open `index.html` in your browser. For the best development experience, use the [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
3. **Deploy**:
   The project is optimized for **GitHub Pages**. Just push to the `main` branch and enable Pages in your repository settings.

---

## 🚀 Performance & Design Philosophy

- **Zero Dependencies**: Pure Vanilla JS/CSS for near-instant load times and zero configuration.
- **Minimalist Utility**: The UI is designed to be uncluttered and tool-focused, moving from "setup" to "analysis" naturally.
- **Accessibility First**: Proper ARIA labels, contrast ratios, and keyboard focus management.

---

## 🔮 Future Improvements

- [ ] **Semester History**: Save and track GPA trends over multiple semesters.
- [ ] **PDF Export**: Generate professional PDF reports of your GPA analysis.
- [ ] **Smart Optimizer**: Automatically select the best subject combinations to reach a target GPA.
- [ ] **AI Recommendations**: Intelligent study planning based on grade difficulty and credits.

---

## 👨‍💻 Author

**Bharath Raj B**
- [GitHub Profile](https://github.com/BharathRaj-2504)
- [LinkedIn Profile](#placeholder)

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for new features or grading systems, please:
1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

**Crafted with ❤️ for the REC community.**
