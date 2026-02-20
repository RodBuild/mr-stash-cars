import { HeroSection } from "../shared/HeroSection"
import { FeatureSection } from "../shared/FeatureSection"
import { ProductGrid } from "../shared/ProductGrid"
import { products } from "../data"

interface LayoutProps {
    t: (key: string, defaultValue: string) => string
}

export function HomeLayout3({ t }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 animate-in zoom-in-95 duration-500">
            <div className="pt-12">
                 <HeroSection t={t} variant="centered" className="py-12" title={t("layout3_title", "Simply Good Stuff.")} subtitle={t("layout3_subtitle", "No fluff. Just quality used goods.")} />
            </div>
            <FeatureSection t={t} />
            <div className="container mx-auto px-4 pb-24">
                 <ProductGrid t={t} products={products} variant="grid" />
            </div>
        </div>
    )
}
