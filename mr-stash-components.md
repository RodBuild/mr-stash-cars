# Mr Stash UI Core Components (Next.js + Tailwind + shadcn)

Brand vibe: dark, blue + gold. A11y: semantic HTML, aria-labels, focus states, reduced motion.

## Theme tokens (Tailwind CSS variables)

Add to your global CSS (e.g. `app/globals.css` in Next.js):

```css
:root {
  --bg: 210 30% 8%;
  --fg: 210 20% 96%;
  --muted: 210 14% 20%;
  --muted-foreground: 210 8% 65%;
  --brand: 210 80% 55%;
  --brand-foreground: 210 10% 10%;
  --accent: 45 90% 55%;
  --accent-foreground: 45 20% 10%;
  --ring: 210 80% 55%;
  --border: 210 10% 24%;
}

.dark {
  --bg: 210 30% 8%;
  --fg: 210 20% 96%;
  --muted: 210 14% 20%;
  --muted-foreground: 210 8% 65%;
  --brand: 210 80% 55%;
  --brand-foreground: 210 10% 10%;
  --accent: 45 90% 55%;
  --accent-foreground: 45 20% 10%;
  --ring: 210 80% 55%;
  --border: 210 10% 24%;
}
```

Add to Tailwind config:

```js
// tailwind.config.js
module.exports = {
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        fg: 'hsl(var(--fg))',
        muted: 'hsl(var(--muted))',
        mutedFg: 'hsl(var(--muted-foreground))',
        brand: 'hsl(var(--brand))',
        brandFg: 'hsl(var(--brand-foreground))',
        accent: 'hsl(var(--accent))',
        accentFg: 'hsl(var(--accent-foreground))',
        ring: 'hsl(var(--ring))',
        border: 'hsl(var(--border))',
      },
    },
  },
}
```

---

## 1) Brand Header

```tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function BrandHeader() {
  return (
    <header className="bg-bg text-fg border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-lg">
          Mr Stash
        </Link>
        <nav className="flex items-center gap-3" aria-label="Primary">
          <Link
            href="/inventory"
            className="text-sm hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Inventory
          </Link>
          <Link
            href="/finance"
            className="text-sm hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Finance
          </Link>
          <Button variant="secondary">Book Test Drive</Button>
        </nav>
      </div>
    </header>
  )
}
```

---

## 2) Hero Section

```tsx
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-bg via-bg to-muted text-fg">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <p className="text-accent font-semibold">Luxury. Reliability. Stash it.</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Find your next ride with confidence</h1>
          <p className="text-mutedFg mt-4">Curated inventory, transparent pricing, and concierge-level service.</p>
          <div className="mt-6 flex gap-3">
            <Button>Browse Inventory</Button>
            <Button variant="outline">Get Pre-Approved</Button>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-muted/30 p-6">
          <p className="text-sm text-mutedFg">Featured</p>
          <h2 className="text-2xl font-semibold">2024 Stash GT</h2>
          <p className="text-mutedFg">0-60 in 3.7s, AWD, 420 hp</p>
          <div className="mt-4 h-40 bg-gradient-to-r from-brand/30 to-accent/30 rounded-xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
```

---

## 3) Search + Filters

```tsx
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export function InventoryFilters() {
  return (
    <form
      className="bg-bg text-fg border border-border rounded-xl p-4 grid gap-4 md:grid-cols-4"
      aria-label="Inventory filters"
    >
      <div className="md:col-span-2">
        <label className="text-sm" htmlFor="search">
          Search
        </label>
        <Input id="search" placeholder="Model, brand, keyword" />
      </div>
      <div>
        <label className="text-sm">Body Style</label>
        <Select>
          <SelectTrigger aria-label="Select body style">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end">
        <Button className="w-full">Apply</Button>
      </div>
    </form>
  )
}
```

---

## 4) Vehicle Card

```tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function VehicleCard() {
  return (
    <article className="bg-bg text-fg border border-border rounded-2xl overflow-hidden">
      <div className="h-40 bg-gradient-to-r from-brand/30 to-accent/30" aria-hidden="true" />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">2023 Stash LX</h3>
          <Badge variant="secondary">Certified</Badge>
        </div>
        <p className="text-mutedFg text-sm">18k miles, AWD</p>
        <p className="text-xl font-bold mt-2">$38,900</p>
        <div className="mt-4 flex gap-2">
          <Button size="sm">View Details</Button>
          <Button size="sm" variant="outline">
            Save
          </Button>
        </div>
      </div>
    </article>
  )
}
```

---

## 5) Feature Highlights

```tsx
import { BadgeCheck, Shield, Sparkles } from 'lucide-react'

const items = [
  { icon: BadgeCheck, title: 'Verified History', text: 'Every car includes a full report.' },
  { icon: Shield, title: 'Warranty Included', text: 'Coverage for 12 months.' },
  { icon: Sparkles, title: 'Detailing', text: 'Concierge-level prep.' },
]

export function Highlights() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="border border-border rounded-xl p-5">
            <item.icon className="text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="text-mutedFg text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## 6) Financing Calculator (simple)

```tsx
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function FinanceCalculator() {
  return (
    <section className="bg-bg text-fg border border-border rounded-2xl p-6">
      <h2 className="text-xl font-semibold">Estimate your payment</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm" htmlFor="price">
            Price
          </label>
          <Input id="price" type="number" defaultValue={38900} />
        </div>
        <div>
          <label className="text-sm" htmlFor="down">
            Down Payment
          </label>
          <Input id="down" type="number" defaultValue={5000} />
        </div>
        <div>
          <label className="text-sm" htmlFor="term">
            Term (months)
          </label>
          <Input id="term" type="number" defaultValue={60} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-mutedFg text-sm">Estimated monthly payment</p>
        <p className="text-2xl font-bold">$642</p>
      </div>
      <Button className="mt-4">Get Pre-Approved</Button>
    </section>
  )
}
```

---

## 7) Testimonials Carousel (static)

```tsx
import { Card } from '@/components/ui/card'

const testimonials = [
  { name: 'Avery', text: 'Smoothest buying experience I have had.' },
  { name: 'Jordan', text: 'Transparent pricing and no pressure.' },
  { name: 'Riley', text: 'The Stash GT is a dream.' },
]

export function Testimonials() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">What drivers say</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border border-border bg-muted/30 p-4">
              <p className="text-sm">"{t.text}"</p>
              <p className="text-mutedFg text-sm mt-3">- {t.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## 8) Dealer Trust Panel

```tsx
import { Separator } from '@/components/ui/separator'

export function TrustPanel() {
  return (
    <section className="bg-muted/20 text-fg border-y border-border">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Transparent pricing</h3>
            <p className="text-mutedFg text-sm">No hidden fees, no surprises.</p>
          </div>
          <Separator className="md:hidden" />
          <div>
            <h3 className="font-semibold">7-day return</h3>
            <p className="text-mutedFg text-sm">Exchange or return, no stress.</p>
          </div>
          <Separator className="md:hidden" />
          <div>
            <h3 className="font-semibold">Certified team</h3>
            <p className="text-mutedFg text-sm">Friendly experts ready to help.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## 9) CTA Banner

```tsx
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-r from-brand to-accent text-brandFg">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Ready to stash your next car?</h2>
          <p className="opacity-90">Book a test drive today and feel the difference.</p>
        </div>
        <Button variant="secondary">Book Now</Button>
      </div>
    </section>
  )
}
```

---

## 10) Footer

```tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-bg text-fg border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Mr Stash</h3>
          <p className="text-mutedFg text-sm">Luxury vehicles with real transparency.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-2 grid gap-1">
            <li>
              <Link className="text-sm hover:text-brand" href="/inventory">
                Inventory
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-brand" href="/finance">
                Finance
              </Link>
            </li>
            <li>
              <Link className="text-sm hover:text-brand" href="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <p className="text-sm text-mutedFg">hello@mrstash.com</p>
          <p className="text-sm text-mutedFg">(555) 555-0123</p>
        </div>
      </div>
    </footer>
  )
}
```

---

## Bonus: Accessibility checklist

- Use `aria-label` for icon-only buttons.
- Ensure focus states via `focus-visible:ring` on links and buttons.
- Use semantic landmarks: `header`, `nav`, `main`, `footer`.
- Respect reduced motion: `@media (prefers-reduced-motion: reduce)`.
- Maintain color contrast for text and controls.
