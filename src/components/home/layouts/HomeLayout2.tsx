import { HeroSection } from "../shared/HeroSection"
import { FeatureSection } from "../shared/FeatureSection"
import { ProductGrid } from "../shared/ProductGrid"
import { NewsletterCTA } from "../shared/NewsletterCTA"
import { products } from "../data"

interface LayoutProps {
    t: (key: string, defaultValue: string) => string
}

export function HomeLayout2({ t }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen animate-in slide-in-from-bottom-4 duration-500">
            <HeroSection t={t} variant="split" />
            <div className="bg-muted/30">
                <ProductGrid t={t} products={products.slice(0, 3)} variant="grid" />
            </div>
            <FeatureSection t={t} />
            <NewsletterCTA t={t} />
        </div>
    )
}
