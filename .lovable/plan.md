

# Smart Student Toolkit — Implementation Plan

## Overview
A free, fast, and beautiful academic utility web app for students. All calculations run client-side with zero backend required for v1. Features a purple-themed glassmorphism design with dark mode support.

---

## Phase 1: Design System & Layout Foundation

### Global Theme & Styling
- Purple-based color scheme (#6B46C1 primary, #8B5CF6 secondary) with light purple gradient background
- Glassmorphism card style (backdrop-blur, rgba backgrounds, soft borders)
- Inter font from Google Fonts (400, 500, 700 weights)
- Dark mode with deep indigo (#1E1B4B) background, system-preference aware, toggleable via header
- Micro-interactions: button hover scale, card lift shadows, smooth transitions

### Shared Layout
- **Header**: Logo + nav links (Home, CGPA, Attendance, Percentage, AI Tools) + dark mode toggle
- **Mobile**: Hamburger menu with slide-out navigation
- **Footer**: Links to About, Privacy, Contact, FAQ + optional ad banner slot
- Responsive breakpoints: single column mobile, 2-col tablet, 3-col desktop

### Reusable Tool Page Template
Every calculator follows the same layout:
1. Tool title with emoji icon + one-line description
2. Input section in a glass-effect card
3. Result section with copy + share buttons (appears after calculation)
4. Collapsible "How It Works" explainer
5. FAQ accordion (3–5 questions)
6. Related tools grid linking to other calculators

---

## Phase 2: Core Calculator Tools

### CGPA / SGPA Calculator (`/cgpa`)
- **Three tabs**: CGPA Calculator, SGPA Calculator, SGPA→CGPA Converter
- Dynamic add/remove subject rows (subject name, grade, credits)
- Support for multiple grading scales (4.0, 5.0, 10.0)
- Real-time calculation on every keypress — no submit button
- Export result as image

### Attendance Calculator (`/attendance`)
- Inputs: total classes held, classes attended, required threshold (default 75%)
- Output: current attendance %, pass/fail status indicator
- **Bunk Meter**: how many more classes can be missed
- **Recovery Mode**: if below threshold, shows minimum consecutive classes to recover

### Percentage Calculator (`/percentage`)
- Three modes via tabs:
  - What is X% of Y?
  - X is what % of Y?
  - Percentage increase/decrease between two values
- Instant results on input change

---

## Phase 3: Advanced "AI" Tools (`/ai-tools`)

### Required GPA Predictor
- Input: current CGPA, remaining semesters/subjects with credit weights, target CGPA
- Output: exact grade point needed per remaining unit

### Attendance Planner
- Input: target date or total planned classes, current attendance, required %
- Output: weekly attendance plan showing minimum classes per week

### Goal Calculator
- Input: target percentage/grade + scores from completed assessments
- Output: required score in upcoming assessments to hit the target

### Study Time Estimator
- Input: subjects, exam dates, difficulty weighting, daily available hours
- Output: day-by-day study schedule with hours per subject

---

## Phase 4: Static Pages & UX Polish

### Pages
- **Home** (`/`): Hero section, featured tools grid with quick-access buttons
- **About** (`/about`): Mission statement, why it was built
- **FAQ** (`/faq`): Accordion-style questions organized per tool
- **Privacy Policy** (`/privacy`): No-tracking statement, cookie policy
- **Contact** (`/contact`): Simple contact form (EmailJS integration), social links

### UX Features
- Copy result to clipboard with checkmark confirmation animation
- Share result via URL query params or Web Share API on mobile
- Reset button with smooth fade-out transition
- Inline field validation with contextual error messages

---

## Design Approach
- Mobile-first, fully responsive (320px+)
- All calculations are client-side — no backend needed for v1
- Lucide React icons throughout
- Smooth CSS transitions, no heavy animations
- Clean, ad-free student experience (ad slots can be added later)

