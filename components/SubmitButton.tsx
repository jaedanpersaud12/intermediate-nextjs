'use client'

import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ label, ...props }: { label: string }) => {
  const { pending } = useFormStatus()
  return (
    <Button {...props} isLoading={pending} type="submit">
      {label}
    </Button>
  )
}

export default SubmitButton
