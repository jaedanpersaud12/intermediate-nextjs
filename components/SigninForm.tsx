'use client'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import SubmitButton from './SubmitButton'
import { signInUser } from '@/actions/auth'
import { useFormState } from 'react-dom'

const SigninForm = () => {
  const [formState, formAction] = useFormState(signInUser, null)
  return (
    <form
      action={formAction}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />
      <SubmitButton label="Sign in" />

      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
    </form>
  )
}

export default SigninForm
