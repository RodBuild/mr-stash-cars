import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialSectionProps {
    t: (key: string, defaultValue: string) => string
    testimonials: Array<{id: string, text: string, author: string}>
}

export function TestimonialSection({ t, testimonials }: TestimonialSectionProps) {
    return (
        <section className="py-24 bg-primary/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">{t("testimonials_heading", "Word on the Street")}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <Card key={item.id} className="border-none shadow-md bg-background">
                            <CardContent className="pt-6 relative">
                                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                                <p className="text-lg italic mb-6 relative z-10 pl-4">"{item.text}"</p>
                                <footer className="text-right font-semibold text-primary">— {item.author}</footer>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
