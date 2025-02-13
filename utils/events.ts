import { db } from '@/db/db'
import { events } from '@/db/schema'
import { asc, eq } from 'drizzle-orm'
import { memoize } from 'nextjs-better-unstable-cache'
import 'server-only'

export const getEventsForDashboard = memoize(
  async (userId: string) => {
    const data = await db.query.events.findMany({
      where: eq(events.createdById, userId),
      columns: {
        id: true,
        name: true,
        startOn: true,
        status: true,
      },
      with: {
        rsvps: true,
      },
      limit: 5,
      orderBy: [asc(events.startOn)],
    })

    return data ?? []
  },
  {
    persist: true,
    revalidateTags: ['dashboard:events'],
    suppressWarnings: true,
    log: ['datacache', 'verbose', 'dedupe'],
    logid: 'dashboard:events',
  }
)
