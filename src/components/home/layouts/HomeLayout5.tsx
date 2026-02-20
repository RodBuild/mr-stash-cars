import { NewsletterCTA } from "../shared/NewsletterCTA"
import { ProductGrid } from "../shared/ProductGrid"
import { products } from "../data"

interface LayoutProps {
    t: (key: string, defaultValue: string) => string
}

export function HomeLayout5({ t }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen animate-in slide-in-from-right-4 duration-500">
            <div className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-5xl font-black tracking-tighter">{t("layout5_title", "I'm Mr. Stash. I sell things.")}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {t("layout5_desc", "Look, I'm a rooster. I have a lot of stuff. You want it? Buy it. It's simple. I collect the best used cars, clothes, and tech. Why? Because I like shiny things. But now I have too many.")}
                    </p>
                </div>
                <div className="bg-primary/5 p-8 rounded-2xl rotate-3 shadow-xl">
                    <p className="text-2xl font-serif italic text-center">
                        "{t("layout5_quote", "One man's trash is another rooster's treasure. But this isn't trash. It's the Stash.")}"
                    </p>
                </div>
            </div>

            <ProductGrid t={t} products={products} variant="grid" />

            <NewsletterCTA t={t} />
        </div>
    )
}
