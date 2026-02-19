import '../globals.css'
import { AppearanceProvider } from '@/context/AppearanceContext'
import { APPEARANCE_COOKIE } from '@/config/constants'
import { LocaleProvider } from '@/context/LocaleContext'
import { MainHeader } from '@/components/MainHeader'
import { Footer } from '@/components/Footer'
import { FeatureFlagProvider } from '@/context/FeatureFlagContext'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

import { cookies } from 'next/headers'

import { getDir } from "@/i18n/settings"
import { DirectionWrapper } from "@/components/DirectionWrapper"

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = (await params)?.locale
  const cookieStore = await cookies()
  const theme = cookieStore.get(APPEARANCE_COOKIE)?.value || 'light'
  const dir = getDir(locale)

  return (
    <html data-theme={theme} lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex flex-col">
        <DirectionWrapper locale={locale}>
          <FeatureFlagProvider>
            <ThemeSwitcher />
            <AppearanceProvider initialAppearance={theme as "light" | "dark"}>
              <LocaleProvider>
                <MainHeader />
                <div className="flex-1">
                  {children}
                </div>
                <Footer />
              </LocaleProvider>
            </AppearanceProvider>
          </FeatureFlagProvider>
        </DirectionWrapper>
      </body>
    </html>
  )
}
