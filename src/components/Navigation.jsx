import React, { useEffect, useState } from 'react'

export default function Navigation() {
  const [active, setActive] = useState('')
  const sections = [
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'personal', label: 'Personal' },
    { id: 'contact', label: 'Contact' }
  ]

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 100
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el) {
          const top = el.offsetTop, bottom = top + el.offsetHeight
          if (y >= top && y < bottom) { setActive(s.id); break }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="sticky top-0 bg-white shadow z-50 no-print">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex overflow-x-auto gap-1 py-3">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`}
               className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${active===s.id?'bg-blue-600 text-white':'text-gray-700 hover:bg-gray-100'}`}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
