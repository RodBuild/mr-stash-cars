import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: {
        id: string
        name: string
        description: string
        price: number
        image?: string
        condition: "New" | "Used" | "Mint"
    }
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
    return (
        <Card className={cn("overflow-hidden flex flex-col h-full", className)} {...props}>
            <div className="aspect-video w-full bg-muted/50 flex items-center justify-center text-muted-foreground">
                {/* Placeholder for real image */}
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                ) : (
                    <span className="text-4xl">📦</span>
                )}
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="line-clamp-1 text-lg">{product.name}</CardTitle>
                    <span className={cn(
                        "text-xs px-2 py-1 rounded-full font-medium",
                        product.condition === "New" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                            product.condition === "Mint" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" :
                                "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                    )}>
                        {product.condition}
                    </span>
                </div>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="text-2xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Stash
                </Button>
            </CardFooter>
        </Card>
    )
}
