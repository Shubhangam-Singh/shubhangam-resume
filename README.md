# 🌐 Shubhangam Singh - Resume Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com/)
[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=flat-square&logo=web&logoColor=white)](https://shubhangam-resume.vercel.app/)

A modern, responsive, and professional resume website built using **React**, **Vite**, and **Tailwind CSS**. This website showcases my education, skills, projects, achievements, and contact details in an elegant and interactive format, complete with a downloadable ATS-friendly PDF resume.

## 🚀 [Live Demo](https://shubhangam-resume.vercel.app/)

## 📱 Screenshots
![Desktop View](https://github.com/user-attachments/assets/2a8e2e24-d196-43e8-a089-deba79829d05)
![Desktop View](https://github.com/user-attachments/assets/1d48061e-ec93-49d8-a4f7-9263a668290a)
![Desktop View](https://github.com/user-attachments/assets/0b1f8abb-60be-4f78-b238-a2e8ab5670d9)

## ✨ Features

- 📱 **Responsive Design** – Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** – Built with Tailwind CSS for a sleek and clean look
- ⚡ **Fast Performance** – Powered by Vite for blazing-fast build and development
- 🔧 **Interactive Sections**:
  - Professional Summary
  - Skills & Technologies
  - Education Background
  - Featured Projects (with GitHub links)
  - Achievements & Certifications
  - Volunteering Experience
  - Contact Information
- 📄 **Downloadable Resume PDF** – Direct download from the header section
- 🌐 **Deployed on GitHub Pages** – Accessible from anywhere
- 📧 **Formspree Integration** – For contact form submissions
- ♿ **Accessible** – Built with accessibility best practices

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI Components & State Management |
| **Vite** | Fast Build Tool & Development Server |
| **Tailwind CSS** | Styling & Responsive Design |
| **Lucide React** | Modern Icons |
| **Formspree** | Contact Form Handling |
| **GitHub Pages** | Free Hosting & Deployment |

## 📂 Project Structure

shubhangam-resume/
│
├── public/
│ ├── shsi_resume.pdf # Downloadable resume file
│ └── favicon.ico # Website favicon
│
├── src/
│ ├── components/
│ │ ├── Header.jsx # Header with contact info & resume download
│ │ ├── About.jsx # Professional summary section
│ │ ├── Skills.jsx # Skills & technologies
│ │ ├── Education.jsx # Educational background
│ │ ├── Projects.jsx # Featured projects with GitHub links
│ │ ├── Achievements.jsx # Achievements & certifications
│ │ ├── Volunteering.jsx # Volunteering experience
│ │ ├── Contact.jsx # Contact form (Formspree integration)
│ │ └── Footer.jsx # Footer section
│ │
│ ├── App.jsx # Main App component
│ ├── index.css # Global styles with Tailwind directives
│ └── main.jsx # React entry point
│
├── .github/
│ └── workflows/
│ └── deploy.yml # GitHub Actions for auto-deployment
│
├── vite.config.mjs # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json # Dependencies and scripts
├── postcss.config.js # PostCSS configuration
└── README.md # Project documentation


## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1️⃣ **Clone the repository**
git clone https://github.com/Shubhangam-Singh/shubhangam-resume.git
cd shubhangam-resume


2️⃣ **Install dependencies**
npm install


3️⃣ **Start development server**
npm run dev


4️⃣ **Open your browser**
Navigate to [http://localhost:5173/](http://localhost:5173/)

### Available Scripts

npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build locally
npm run deploy # Deploy to GitHub Pages
npm run lint # Run ESLint


## 🌐 Deployment

### GitHub Pages Deployment

1. **Build the project**
npm run build


2. **Deploy to GitHub Pages**
npm run deploy


### Configuration

Ensure your `vite.config.mjs` includes:
export default defineConfig({
base: '/shubhangam-resume/',
plugins: [react()],
});


## 💼 Featured Projects

| Project | Description | Technologies | Links |
|---------|-------------|--------------|-------|
| **Parking Lot Management System** | Smart parking management with real-time tracking | Java, Spring Boot, MySQL | [GitHub](https://github.com/Shubhangam-Singh/Parking-Lot-Management-Project) |
| **YOLO Logo Detection** | Machine learning model for logo detection | Python, YOLO, OpenCV | [GitHub](https://github.com/Shubhangam-Singh/Yolo_Logo_Detection) |
| **Logitrack System** | Logistics tracking and management system | React, Node.js, MongoDB | [GitHub](https://github.com/Shubhangam-Singh/logitrack-system) |
| **Oscillatory System** | Physics simulation of oscillatory motion | Python, Matplotlib, NumPy | [GitHub](https://github.com/Shubhangam-Singh/Oscillatory-System) |

## 📄 Resume Download

📥 **[Download Latest Resume (PDF)](https://shubhangam-singh.github.io/shubhangam-resume/shsi_resume.pdf)**


## 🎨 Customization

### Personalizing for Your Use

1. **Update personal information** in `src/components/Header.jsx`
2. **Modify sections** in respective component files
3. **Replace resume PDF** in `public/` directory
4. **Update colors** in `tailwind.config.js`
5. **Add your projects** in `src/components/Projects.jsx`

### Color Scheme

The website uses a professional blue and gray color palette. You can customize it in `tailwind.config.js`:

module.exports = {
theme: {
extend: {
colors: {
primary: '#your-primary-color',
secondary: '#your-secondary-color',
}
}
}
}


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Contact

**Shubhangam Singh**

- 📧 Email: [shubhangam2005singh@gmail.com](mailto:shubhangam2005singh@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/shubhangam2005singh](https://www.linkedin.com/in/shubhangam2005singh/)
- 🐙 GitHub: [@Shubhangam-Singh](https://github.com/Shubhangam-Singh)
- 🌐 Website: [https://shubhangam-resume.vercel.app/](https://shubhangam-resume.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Shubhangam-Singh">Shubhangam Singh</a></p>
  <p>🌟 Star this repo if you found it helpful!</p>
</div>
