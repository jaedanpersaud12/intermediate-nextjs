'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/images/pardy.png'
import { Home, Calendar, Users, Activity, Settings, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const links = [
  { route: '/dashboard', name: 'Home', icon: Home },
  { route: '/dashboard/events', name: 'Events', icon: Calendar },
  { route: '/dashboard/guests', name: 'Guests', icon: Users },
  { route: '/dashboard/activity', name: 'Activity', icon: Activity },
  { route: '/dashboard/settings', name: 'Settings', icon: Settings },
]

const isActive = (pathname: string, route: string) => {
  if (route === '/dashboard') return pathname === '/dashboard'
  return pathname.includes(route)
}

const Side = () => {
  const pathname = usePathname()

  return (
    <aside className="h-full flex flex-col bg-gradient-to-b from-white/[0.02] to-transparent">
      {/* Logo section */}
      <div className="px-6 pt-8 pb-8">
        <Link href="/dashboard" className="block">
          <figure className="w-[110px]">
            <Image src={Logo} alt="pardy" className="w-full h-auto" priority />
          </figure>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <div className="space-y-1.5">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.route
            return (
              <Link key={link.route} href={link.route} className="block w-full">
                <div
                  className={cn(
                    'group relative flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 overflow-hidden',
                    isActive
                      ? 'bg-gradient-to-r from-white/[0.12] to-white/[0.08] text-white'
                      : 'hover:bg-white/[0.04] text-white/70'
                  )}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent opacity-20" />
                  )}
                  <Icon
                    className={cn(
                      'h-[18px] w-[18px] transition-all duration-300',
                      isActive
                        ? 'text-primary'
                        : 'text-white/50 group-hover:text-white/70'
                    )}
                  />
                  <span className="font-medium text-[13px] tracking-wide">
                    {link.name}
                  </span>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[22px] bg-primary rounded-r" />
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Sign out button */}
      <div className="p-4 mt-auto">
        <Button className="w-full bg-gradient-to-r from-white/[0.08] to-transparent hover:from-white/[0.12] hover:to-white/[0.02] text-white/80 py-6 rounded-xl transition-all duration-300">
          <LogOut className="h-4 w-4 mr-2 opacity-60" />
          <span className="font-medium tracking-wide text-[13px]">
            Sign Out
          </span>
        </Button>
      </div>
    </aside>
  )
}

export default Side
