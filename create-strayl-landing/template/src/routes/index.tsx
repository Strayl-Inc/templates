import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ThemedLogo } from '@/components/themed-logo'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-normal text-foreground font-[family-name:var(--font-bitcount)]">
          STRAYL
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4">
          Landing page template
        </p>
        <div className="mt-8">
          <Button size="lg" render={<a href="https://strayl.dev" target="_blank" rel="noopener noreferrer" />}>
            <ThemedLogo width={20} height={20} inverted />
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
