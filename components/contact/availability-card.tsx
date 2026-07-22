'use client'

import { motion } from 'framer-motion'
import { Clock, CheckCircle } from 'lucide-react'
import { profile } from '@/lib/profile'

export function AvailabilityCard() {
  return (
    <motion.div
      className="glass-strong rounded-xl p-8 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CheckCircle className="h-6 w-6 text-blue-300" />
          </motion.div>
          <h3 className="text-lg font-bold">Currently Available</h3>
        </div>
        <p className="text-gray-400 text-sm">
          Open for {profile.contactFor.join(', ').toLowerCase()}.
        </p>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-6 w-6 text-violet-300" />
          <h3 className="text-lg font-bold">Response Time</h3>
        </div>
        <p className="text-gray-400 text-sm">
          Best way to reach me: X, Telegram, Discord, or email at {profile.email}.
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Gigs</span>
          <span className="text-blue-300 font-medium">Available</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Collaborations</span>
          <span className="text-blue-300 font-medium">Available</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Mentorship & Training</span>
          <span className="text-blue-300 font-medium">Available</span>
        </div>
      </div>
    </motion.div>
  )
}
