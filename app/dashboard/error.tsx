'use client'

import { Button } from '@/components/ui/button'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}
