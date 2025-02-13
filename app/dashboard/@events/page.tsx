import { getEventsForDashboard } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import { format } from 'date-fns'
import { Calendar, Users, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const EventsSlot = async () => {
  const user = await getCurrentUser()
  const events = await getEventsForDashboard(user.id)

  if (events.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="gradient-heading text-2xl">Your Events</h2>
        <div className="glass-container rounded-glass p-8 text-center">
          <Calendar className="mx-auto h-12 w-12 text-white/25 mb-4" />
          <h3 className="text-lg font-medium text-white/80">No events yet</h3>
          <p className="mt-2 text-sm text-white/60">
            Time to plan something amazing!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="gradient-heading text-2xl">Your Events</h2>
        <div className="glass-container rounded-full px-3 py-1 text-sm text-white/60">
          {events.length} events
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.id}`}
            className="glass-card card-accent accent-top-left p-5"
            style={{ '--accent-color': `var(--status-${event.status})` } as any}
          >
            {/* Top left and right status bars */}
            <div className={`status-bar top-left bg-status-${event.status}`} />
            <div
              className={`status-bar top-right bg-status-${event.status} opacity-50`}
            />

            <div className="space-y-4">
              {/* Event name and date */}
              <div>
                <h3 className="font-medium text-white group-hover:text-white/90 transition-colors line-clamp-1">
                  {event.name}
                </h3>
                <div className="mt-2 flex items-center text-sm text-white/60">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  {format(new Date(event.startOn), 'MMMM d, yyyy')}
                </div>
              </div>

              {/* RSVP stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {event.rsvps.some((rsvp) => rsvp.status === 'going') && (
                    <div className="flex items-center gap-1.5">
                      <div className="dot-indicator bg-emerald-500" />
                      <span className="text-sm text-white/80">
                        {
                          event.rsvps.filter((rsvp) => rsvp.status === 'going')
                            .length
                        }
                      </span>
                    </div>
                  )}
                  {event.rsvps.some((rsvp) => rsvp.status === 'maybe') && (
                    <div className="flex items-center gap-1.5">
                      <div className="dot-indicator bg-amber-500" />
                      <span className="text-sm text-white/80">
                        {
                          event.rsvps.filter((rsvp) => rsvp.status === 'maybe')
                            .length
                        }
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-white/60">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{event.rsvps.length}</span>
                </div>
              </div>

              {/* Status and arrow */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-status uppercase text-white/60">
                  {event.status}
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventsSlot
