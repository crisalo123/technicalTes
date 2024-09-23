import { SpecificAgentProps } from '@/components/ui/header'
import { ReactNode } from 'react'

export interface BaseLayoutProps {
  children: ReactNode
  className?: string
  mainClassName?: string
  header?: boolean
  navBar?: boolean
  subHeader?: boolean
  specificAgent?: SpecificAgentProps
  valueStatusAgent?: number
  valuesGenerMovue: (values: number) => void
}
