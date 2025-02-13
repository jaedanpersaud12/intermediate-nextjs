// /app/dashboard/@rsvps/page.tsx
import { getRsvpsForDashboard } from '@/utils/rsvps'
import { getCurrentUser } from '@/utils/users'
import { Calendar, User } from 'lucide-react'
import Link from 'next/link'

const statusColors = {
  going: 'emerald-500',
  maybe: 'amber-500',
  'not-going': 'rose-500',
}

const RsvpsSlot = async () => {
  const user = await getCurrentUser()
  const data = await getRsvpsForDashboard(user.id)

  if (data.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="gradient-heading text-2xl">Your RSVPs</h2>
        <div className="glass-container rounded-glass p-8 text-center">
          <User className="mx-auto h-12 w-12 text-white/25 mb-4" />
          <h3 className="text-lg font-medium text-white/80">No RSVPs yet</h3>
          <p className="mt-2 text-sm text-white/60">
            Join some events to get started!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="gradient-heading text-2xl">Your RSVPs</h2>
        <div className="glass-container rounded-full px-3 py-1 text-sm text-white/60">
          {data.length} responses
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {data.map(({ rsvps, events, attendees }) => {
          if (!rsvps || !events) return null
          return (
            <Link
              key={rsvps.id}
              href={`/dashboard/events/${events.id}`}
              className="glass-card p-5"
            >
              {/* Left status bar */}

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="font-medium text-white group-hover:text-white/90 transition-colors">
                    {events.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-white/60">
                      <User className="mr-1.5 h-4 w-4" />
                      {attendees.name}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`dot-indicator bg-${
                          statusColors[rsvps.status]
                        }`}
                      />
                      <span className="text-sm text-white/80 uppercase">
                        {rsvps.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default RsvpsSlot
