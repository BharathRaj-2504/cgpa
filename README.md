# 🎓 REC CGPA Predictor

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform: GitHub Pages](https://img.shields.io/badge/Platform-GitHub%20Pages-brightgreen.svg)](https://pages.github.com/)
[![Stack: Vanilla JS](https://img.shields.io/badge/Stack-Pure%20HTML/CSS/JS-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A lightweight, maintainable, and premium CGPA Predictor designed specifically for students of **Rajalakshmi Engineering College (REC)**. Built with pure Vanilla JavaScript, this tool focuses on calculating and optimizing your semester performance.

---

## ✨ Features

- 🎯 **Semester Improvement Analyzer**: Interactive suggestions to upgrade your grades and see instant impact on your semester GPA.
- 🚀 **Dynamic Subject Management**: Add or remove subjects on the fly.
- 🌓 **Dark/Light Mode**: Premium dark mode support with theme persistence.
- 📱 **Mobile First Design**: Fully responsive UI with a sticky footer for results.
- 💾 **Local Storage Persistence**: Your subjects are automatically saved locally.
- 🎨 **Modern Aesthetics**: Glassmorphism, smooth animations, and refined typography.
- 📐 **REC Grade System**: Pre-configured with REC's official grade point values.

---

## 🛠️ Tech Stack

- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, Grid, Glassmorphism)
- **Logic**: Vanilla JavaScript (ES6 Modules)
- **Storage**: Browser LocalStorage API

---

## 📂 Project Structure

```text
/project-root
│
├── index.html          # Main entry point (Structure)
├── README.md           # Project documentation
├── css/
│   └── style.css       # Core styling & Design system
├── js/
│   ├── app.js          # Main orchestrator
│   ├── ui.js           # DOM manipulation & View logic
│   ├── cgpa.js         # Calculation & Analysis engine
│   ├── storage.js      # Data persistence logic
│   └── theme.js        # Theme management
└── assets/             # Images, Icons, and Logos
```

---

## 🧮 Calculation Formula

### Semester GPA
$$GPA = \frac{\sum (Grade Points \times Credits)}{\sum (Total Semester Credits)}$$

### Grade System:
| Grade | Point |
|-------|-------|
| O     | 10    |
| A+    | 9     |
| A     | 8     |
| B+    | 7     |
| B     | 6     |
| C     | 5     |
| U     | 0     |



---

## 🚀 Getting Started

### Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/rec-cgpa-predictor.git
   ```
2. Open `index.html` in any modern web browser.
3. No build step or installation required!

### Deployment on GitHub Pages
1. Push your code to a GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select the `main` branch and `/root` folder.
4. Click **Save**. Your site will be live at `https://your-username.github.io/rec-cgpa-predictor/`.

---

## 🔮 Future Improvements

- [ ] **GPA History Tracking**: Visualize your performance over multiple semesters.
- [ ] **PDF Export**: Generate a clean PDF report of your predicted results.
- [ ] **REC Regulation Selection**: Switch between different regulation years (e.g., 2019, 2023).
- [ ] **Subject Templates**: Pre-fill subjects based on department and semester.
- [ ] **Grade Analytics**: Detailed charts and statistics of your performance.

---

## 🤝 Contribution

Contributions are welcome! If you'd like to improve the UI or add a feature, feel free to:
1. Fork the repo.
2. Create a new branch.
3. Commit your changes.
4. Open a Pull Request.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**  
*Proud RECian*

---

> [!TIP]
> This project was built for educational purposes to help students manage their academic goals more effectively.
