import { cn } from '@/lib/utils'
import { BaseLayoutProps } from '@/types/base_layout'
import { Header, Navbar, Wrapper } from '@/components/ui'

export function BaseLayout({
  children,
  className = '',
  mainClassName = '',
  header,
  navBar = true,
  subHeader,
  specificAgent,
  valueStatusAgent,
  valuesGenerMovue,
}: Readonly<BaseLayoutProps>) {
  return (
    <div className={cn('relative flex min-h-screen bg-primary-50 ', className)}>
      {navBar && <Navbar valueGenerMovie={valuesGenerMovue} />}
      <div className="flex w-full flex-col px-5">
        {header && (
          <Header
            subHeader={subHeader}
            specificAgent={specificAgent}
            valueStatusAgent={valueStatusAgent}
          />
        )}
        <Wrapper>
          <main
            className={cn(
              'h-full w-full overflow-y-auto pb-4 pt-5',
              mainClassName
            )}
          >
            {children}
          </main>
        </Wrapper>
      </div>
    </div>
  )
}
