import { HomePageSwitcher } from "@/components/home/HomePageSwitcher"
import { useTranslation } from "@/i18n/server"

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const { i18n } = await useTranslation(locale, "translation")

  // Get all translations for this namespace
  const translations = i18n.getResourceBundle(locale, "translation") || {}

  return (
    <main className="min-h-screen bg-background">
      <HomePageSwitcher translations={translations} />
    </main>
  )
}
