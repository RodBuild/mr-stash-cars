import { Section } from "@/components/Section"

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Section className="py-20 text-center space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
            The <span className="text-primary">Stash</span> is Open.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the finest collection of diecast cars and premium collectibles.
            Curated for the true enthusiast.
          </p>
        </Section>
      </main>
    </>
  )
}

