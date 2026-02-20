import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

interface NewsletterCTAProps {
    t: (key: string, defaultValue: string) => string
}

export function NewsletterCTA({ t }: NewsletterCTAProps) {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">{t("newsletter_title", "Don't Miss the Next Drop")}</h2>
                <p className="mb-8 text-primary-foreground/80 text-lg">{t("newsletter_desc", "Mr. Stash finds the good stuff early. Join the list to get first dibs.")}</p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        type="email"
                        placeholder={t("newsletter_placeholder", "Enter your email")}
                        className="bg-primary-foreground text-primary placeholder:text-primary/50 border-none sm:w-80"
                        aria-label={t("newsletter_placeholder", "Enter your email")}
                    />
                    <Button variant="secondary" size="lg" type="submit">
                        {t("newsletter_btn", "Subscribe")}
                        <Send className="ml-2 w-4 h-4" />
                    </Button>
                </form>
            </div>
        </section>
    )
}
