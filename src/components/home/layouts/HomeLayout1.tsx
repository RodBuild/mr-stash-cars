import { HeroSection } from "../shared/HeroSection"
import { FeatureSection } from "../shared/FeatureSection"
import { ProductGrid } from "../shared/ProductGrid"
import { TestimonialSection } from "../shared/TestimonialSection"
import { NewsletterCTA } from "../shared/NewsletterCTA"
import { products, testimonials } from "../data"

interface LayoutProps {
    t: (key: string, defaultValue: string) => string
}

export function HomeLayout1({ t }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen animate-in fade-in duration-500">
            <HeroSection t={t} variant="centered" />
            <FeatureSection t={t} />
            <ProductGrid t={t} products={products} />
            <TestimonialSection t={t} testimonials={testimonials} />
            <NewsletterCTA t={t} />
        </div>
    )
}
