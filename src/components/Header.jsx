import React from 'react'
import { Download, Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Shubhangam Singh</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Computer Science Undergraduate | VIT Vellore
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <MapPin size={16}/> <span>Allahabad, Uttar Pradesh — 211002</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16}/> <a href="tel:8299363396" className="hover:text-blue-200">8299363396</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16}/> <a href="mailto:shubhangam2005singh@gmail.com" className="hover:text-blue-200">
              shubhangam2005singh@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={16}/> <a href="https://www.linkedin.com/in/shubhangam2005singh/" target="_blank" rel="noreferrer" className="hover:text-blue-200">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="text-center mt-8">
        <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = "https://shubhangam-singh.github.io/shubhangam-resume/shsi_resume.pdf";
    link.setAttribute("download", "Shubhangam_Singh_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }}
  className="btn-secondary inline-flex items-center gap-2"
>
  <Download size={16}/> Download Resume (PDF)
</button>

        </div>
      </div>
    </header>
  )
}
