import { HeroSection } from "../shared/HeroSection"
import { ProductGrid } from "../shared/ProductGrid"
import { TestimonialSection } from "../shared/TestimonialSection"
import { NewsletterCTA } from "../shared/NewsletterCTA"
import { products, testimonials } from "../data"

interface LayoutProps {
    t: (key: string, defaultValue: string) => string
}

export function HomeLayout4({ t }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen animate-in fade-in duration-700">
            <HeroSection t={t} variant="banner" />
            <ProductGrid t={t} products={products} variant="scroll" />
            <div className="bg-accent/10">
                <TestimonialSection t={t} testimonials={testimonials} />
            </div>
            <NewsletterCTA t={t} />
        </div>
    )
}
