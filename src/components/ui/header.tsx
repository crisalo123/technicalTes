import { Card } from './card'

import { cn } from '@/lib/utils'
import { Input } from './input'

export interface SpecificAgentProps {
  fullName: string
  role: string
  ext: string
  email: string
}
export interface HeaderProps {
  subHeader?: boolean
  specificAgent?: SpecificAgentProps
  valueStatusAgent?: number
}

export function Header({ subHeader = false }: Readonly<HeaderProps>) {
  return (
    <div
      className={cn(
        'sticky top-0 z-40 flex w-full flex-col items-center p-2',
        subHeader && ' h-full'
      )}
    >
      <Card
        className={cn(
          ` flex h-[45px] w-full items-center relative rounded-lg bg-cover bg-primary-200    `,
          subHeader && 'h-[156px] items-start'
        )}
      >
        <Input className="h-[45px] text-white" placeholder="Buscar.." />
      </Card>
    </div>
  )
}
