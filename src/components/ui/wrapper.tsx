import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
  className?: string
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn('mx-auto h-full w-full', className)}>{children}</div>
  )
}
