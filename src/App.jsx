import React from 'react'
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Summary from './components/Summary.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Volunteering from './components/Volunteering.jsx'
import Personal from './components/Personal.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <section id="summary"><Summary /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="achievements"><Achievements /></section>
        <section id="volunteering"><Volunteering /></section>
        <section id="personal"><Personal /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="bg-gray-900 text-white text-center py-4 mt-12">
        <p>&copy; 2025 Shubhangam Singh</p>
      </footer>
    </div>
  )
}
