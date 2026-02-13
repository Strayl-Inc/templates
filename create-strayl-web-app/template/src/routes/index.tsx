import { createFileRoute } from '@tanstack/react-router'
import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { ThemedLogo } from '../components/themed-logo'
import { LanguageSwitcher } from '../components/language-switcher'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Language switcher - top left */}
      <div className="fixed top-4 left-4 z-50">
        <LanguageSwitcher />
      </div>

      {/* Theme toggle - top right */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          aria-label={t('toggleTheme')}
        >
          {mounted ? (
            resolvedTheme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />
          ) : (
            <div className="size-4" />
          )}
        </Button>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="relative max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-6xl md:text-8xl font-normal text-foreground font-[family-name:var(--font-bitcount)]">
              STRAYL
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            {t('tagline')}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('description')}
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button size="lg" render={<a href="https://strayl.dev" target="_blank" rel="noopener noreferrer" />}>
              <ThemedLogo width={20} height={20} inverted />
              {t('deployButton')}
            </Button>
            <p className="text-muted-foreground text-sm mt-2">
              {t('beginJourney')}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
