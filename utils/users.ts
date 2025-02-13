import 'server-only'

import { cookies } from 'next/headers'
import { COOKIE_NAME } from './constants'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
  console.log('Getting current user')
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')
  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')
  return user
})
