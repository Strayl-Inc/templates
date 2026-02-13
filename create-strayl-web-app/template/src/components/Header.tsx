import { Link } from '@tanstack/react-router'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Home, Menu, Moon, Sun } from 'lucide-react'
import { ThemedLogo } from './themed-logo'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetPopup,
  SheetHeader,
  SheetTitle,
  SheetPanel,
  SheetClose,
} from '@/components/ui/sheet'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="p-4 flex items-center justify-between bg-card border-b border-border">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" />}>
            <Menu size={24} />
          </SheetTrigger>
          <SheetPopup side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <SheetPanel>
              <nav className="flex flex-col gap-2">
                <SheetClose
                  render={
                    <Link
                      to="/"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      activeProps={{
                        className:
                          'flex items-center gap-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors',
                      }}
                    />
                  }
                >
                  <Home size={20} />
                  <span className="font-medium">Home</span>
                </SheetClose>
              </nav>
            </SheetPanel>
          </SheetPopup>
        </Sheet>
        <Link to="/" className="ml-4 flex items-center gap-2">
          <ThemedLogo width={32} height={32} />
          <span className="text-xl font-semibold">Strayl</span>
        </Link>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
      >
        {mounted ? (
          resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
        ) : (
          <div className="w-5 h-5" />
        )}
      </Button>
    </header>
  )
}
