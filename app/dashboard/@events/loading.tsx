import { Icons } from '@/components/icons'

const EventsLoading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Icons.spinner className="text-primary animate-spin" />
    </div>
  )
}

export default EventsLoading
