import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  t: (key: string, defaultValue: string) => string
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
  variant?: "centered" | "split" | "banner"
  className?: string
}

export function HeroSection({
  t,
  title,
  subtitle,
  ctaText,
  ctaLink = "/products",
  backgroundImage,
  variant = "centered",
  className
}: HeroSectionProps) {

  const displayTitle = title || t("hero_title", "Mr. Stash's Emporium of Used Goods")
  const displaySubtitle = subtitle || t("hero_subtitle", "Cars, Clothes, Tech. If it's used, we have it.")
  const displayCta = ctaText || t("hero_cta", "Browse the Stash")

  if (variant === "split") {
    return (
      <section className={cn("container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center", className)}>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{displayTitle}</h1>
          <p className="text-xl text-muted-foreground">{displaySubtitle}</p>
          <Button asChild size="lg">
            <Link href={ctaLink}>{displayCta}</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-96 bg-muted rounded-lg overflow-hidden">
             {/* Placeholder for image */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                <span className="text-4xl font-mono">Mr. Stash</span>
             </div>
        </div>
      </section>
    )
  }

  if (variant === "banner") {
      return (
        <section className={cn("relative w-full h-[500px] flex items-center justify-center text-center text-white bg-slate-900 overflow-hidden", className)}>
            <div className="absolute inset-0 bg-black/50 z-10" />
            {/* Background placeholder */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900" />

            <div className="relative z-20 container mx-auto px-4 space-y-6">
                <h1 className="text-5xl md:text-7xl font-extrabold">{displayTitle}</h1>
                <p className="text-2xl md:text-3xl font-light opacity-90">{displaySubtitle}</p>
                <Button asChild size="lg" variant="secondary" className="mt-4">
                    <Link href={ctaLink}>{displayCta}</Link>
                </Button>
            </div>
        </section>
      )
  }

  // Default centered
  return (
    <section className={cn("container mx-auto px-4 py-24 text-center space-y-8", className)}>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">{displayTitle}</h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">{displaySubtitle}</p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
            <Link href={ctaLink}>{displayCta}</Link>
        </Button>
      </div>
    </section>
  )
}
