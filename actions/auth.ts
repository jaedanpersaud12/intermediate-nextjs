'use server'

import { signin, signup } from '@/utils/authTools'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { redirect } from 'next/navigation'
import { COOKIE_NAME } from '@/utils/constants'

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const registerUser = async (_: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  try {
    const { token } = await signup(data)
    cookies().set(COOKIE_NAME, token)
  } catch (error) {
    console.error(error)
  }
  redirect('/dashboard')
}

const signInUser = async (_: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  const { token } = await signin(data)
  cookies().set(COOKIE_NAME, token)
  redirect('/dashboard')
}

export { registerUser, signInUser }
