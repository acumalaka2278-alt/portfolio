# Professional Developer Portfolio

A modern, minimal, and fully responsive personal portfolio website built with React and Tailwind CSS. Designed specifically for junior developers to showcase their skills and projects effectively to recruiters.

## 🎨 Design System

### Color Palette
We used a sophisticated **Slate** color palette (from Tailwind's default colors) combined with a trustworthy **Blue** accent.
- **Primary Text (`slate-900`)**: High contrast for headings, reading clearly and professionally.
- **Body Text (`slate-600`)**: Softer than pure black, reducing eye strain while maintaining readability.
- **Background (`slate-50`)**: A very subtle off-white that adds depth compared to plain white.
- **Accent (`blue-600`)**: Used for call-to-actions (buttons, links) to guide the user's attention. Blue represents trust and professionalism.
- **Gradients**: Subtle gradients (Blue to Purple) are used in backgrounds to add a modern "tech" feel without being overwhelming.

### Typography
**Inter**: Selected for its clean, modern aesthetic and high legibility on logic screens. It is widely used in modern software products, making the portfolio feel native to the tech industry.

## 🏗 Project Structure

```
src/
├── components/      # Reusable UI components (Navbar, Footer)
├── sections/        # Main page sections (Hero, About, Skills, Projects, Contact)
├── data/            # Centralized content file for easy updates
├── index.css        # Global styles and Tailwind directives
└── App.jsx          # Main application layout
```

## 🚀 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## 💡 Best Practices for Junior Portfolios included in this design:

1.  **"Above the Fold" Impact**: The Hero section immediately tells the recruiter *who* you are and *what* you do. The "View Work" and "Download CV" buttons provide immediate call-to-actions.
2.  **Scannable Content**: Recruiters spend very little time on a portfolio. We used clear headings, skills chips, and bullet points to make content digestible at a glance.
3.  **Project-First Approach**: The Projects section highlights *what* you built and *how* (tech stack).
4.  **Accessibility**: High color contrast, semantic HTML tags (`<section>`, `<nav>`, `<h1>`), and clear focus states are built-in.
5.  **Mobile First**: The site is fully responsive, ensuring it looks great on a recruiter's phone or a manager's 4k monitor.
6.  **Easy Maintenance**: All data (text, projects, skills) is separated into `src/data/index.js`. You don't need to dig through React components to update your resume content.

## 📝 Customization

To customize this portfolio for yourself:
1.  Open `src/data/index.js`.
2.  Update the `personalInfo`, `skills`, and `projects` objects with your real data.
3.  Replace `src/assets` or image URLs with your real project screenshots.
