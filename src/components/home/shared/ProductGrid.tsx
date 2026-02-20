import Link from "next/link"
import { Product } from "../data"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProductGridProps {
    t: (key: string, defaultValue: string) => string
    products: Product[]
    variant?: "grid" | "scroll"
}

export function ProductGrid({ t, products, variant = "grid" }: ProductGridProps) {
    if (variant === "scroll") {
        return (
            <section className="py-24 container mx-auto px-4 overflow-hidden">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-3xl font-bold">{t("featured_products", "Featured Finds")}</h2>
                    <Button variant="link" asChild>
                        <Link href="/products">{t("view_all", "View All")} &rarr;</Link>
                    </Button>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[300px] snap-center">
                            <ProductCard product={product} t={t} />
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    return (
        <section className="py-24 container mx-auto px-4">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{t("new_arrivals", "Fresh from the Stash")}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">{t("new_arrivals_desc", "Check out what Mr. Stash just dragged in.")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} t={t} />
                ))}
            </div>
             <div className="mt-12 text-center">
                <Button size="lg" asChild>
                    <Link href="/products">{t("shop_all", "Shop All Items")}</Link>
                </Button>
            </div>
        </section>
    )
}

function ProductCard({ product, t }: { product: Product, t: (k: string, d: string) => string }) {
    // Determine badge color
    const badgeColor =
        product.condition === "Mint" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
        product.condition === "Good" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" :
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"

    return (
        <Card className="overflow-hidden group h-full flex flex-col">
            <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                {/* Fallback for Image since external domains might not be configured */}
                <div className="text-muted-foreground font-semibold text-lg">{product.name}</div>

                <span className={cn("absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded", badgeColor)}>
                    {product.condition}
                </span>
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                        <CardTitle className="mt-1 text-lg">{product.name}</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                 <p className="font-bold text-xl text-primary">{product.price}</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">{t("add_to_cart", "Add to Cart")}</Button>
            </CardFooter>
        </Card>
    )
}
