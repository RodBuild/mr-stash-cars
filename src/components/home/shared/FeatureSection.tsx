import { CheckCircle2, ShieldCheck, Tag } from "lucide-react"

interface FeatureSectionProps {
    t: (key: string, defaultValue: string) => string
}

export function FeatureSection({ t }: FeatureSectionProps) {
    const features = [
        {
            icon: ShieldCheck,
            title: t("feature_mint_title", "Mint Condition"),
            description: t("feature_mint_desc", "Like new. Zero scratches. Original packaging often included. For the perfectionist.")
        },
        {
            icon: CheckCircle2,
            title: t("feature_good_title", "Good Condition"),
            description: t("feature_good_desc", "Gently used. Fully functional. Minor cosmetic wear. The sweet spot of value.")
        },
        {
            icon: Tag,
            title: t("feature_fair_title", "Fair Condition"),
            description: t("feature_fair_desc", "Well-loved. Visible wear but works perfectly. Greatest savings for the pragmatist.")
        }
    ]

    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">{t("features_heading", "Quality You Can Trust")}</h2>
                    <p className="text-muted-foreground">{t("features_subheading", "We grade every item so you know exactly what you're getting.")}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border">
                            <div className="p-4 bg-primary/10 rounded-full mb-6">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
