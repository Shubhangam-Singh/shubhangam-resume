import React, { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact(){
  const [formData,setFormData] = useState({ name:'', email:'', message:'' })
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [status,setStatus] = useState('')

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true); setStatus('')
    try {
      const resp = await fetch('https://formspree.io/f/xdklnzed', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      })
      if (resp.ok){ setStatus('ok'); setFormData({name:'',email:'',message:''}) }
      else throw new Error('Form submission failed')
    } catch (err){
      setStatus('err')
      const subject = `Contact from ${formData.name}`
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      window.location.href = `mailto:shubhangam.singh2023@vitstudent.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    } finally { setIsSubmitting(false) }
  }

  return (
    <div className="card">
      <h2 className="section-title">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name *</label>
          <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email *</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                 id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message *</label>
          <textarea rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={isSubmitting} className="btn-primary inline-flex items-center gap-2 disabled:opacity-50">
          <Send size={16}/>{isSubmitting?'Sending...':'Send Message'}
        </button>
      </form>
      {status==='ok' && <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">Message sent successfully.</div>}
      {status==='err' && <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">There was an error. Please try again or email directly.</div>}
      
    </div>
  )
}
