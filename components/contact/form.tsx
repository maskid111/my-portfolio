'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { animations } from '@/lib/animations'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { profile } from '@/lib/profile'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || 'Website inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )
    window.location.href = `${profile.socialLinks.email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.div
      className="glass-strong rounded-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <motion.div variants={animations.itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="field-input"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={animations.itemVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="field-input"
              />
            </motion.div>
          </div>

          {/* Subject */}
          <motion.div variants={animations.itemVariants}>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Gigs, collaboration, mentorship, or training"
              className="field-input"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={animations.itemVariants}>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell Maskid what you want to build, book, or discuss..."
              rows={6}
              className="field-input resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={animations.itemVariants}>
            <Button
              type="submit"
              className="btn-primary w-full h-12 text-base"
            >
              Open Email Draft
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </form>
    </motion.div>
  )
}
