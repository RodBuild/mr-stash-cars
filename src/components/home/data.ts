export interface Product {
  id: string
  name: string
  price: string
  category: "Cars" | "Clothes" | "Tech"
  condition: "Mint" | "Good" | "Fair"
  image: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "1998 Toyota Corolla",
    price: "$2,500",
    category: "Cars",
    condition: "Good",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Toyota+Corolla"
  },
  {
    id: "2",
    name: "Vintage Denim Jacket",
    price: "$85",
    category: "Clothes",
    condition: "Fair",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Denim+Jacket"
  },
  {
    id: "3",
    name: "MacBook Pro 2015",
    price: "$450",
    category: "Tech",
    condition: "Mint",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=MacBook+Pro"
  },
  {
    id: "4",
    name: "Sony Walkman",
    price: "$120",
    category: "Tech",
    condition: "Good",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Sony+Walkman"
  },
  {
    id: "5",
    name: "Leather Boots",
    price: "$60",
    category: "Clothes",
    condition: "Good",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Leather+Boots"
  },
  {
    id: "6",
    name: "2005 Honda Civic",
    price: "$3,200",
    category: "Cars",
    condition: "Fair",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Honda+Civic"
  }
]

export const testimonials = [
  {
    id: "1",
    text: "I didn't think I needed a 20-year-old toaster, but Mr. Stash convinced me otherwise. It works perfectly!",
    author: "Satisfied Customer"
  },
  {
    id: "2",
    text: "The 'Fair' condition items are honestly better than 'New' stuff you buy today. Built to last.",
    author: "Vintage Lover"
  },
  {
    id: "3",
    text: "Cluck cluck. Buy my stuff. It's good stuff. Make me rich.",
    author: "Mr. Stash"
  }
]
