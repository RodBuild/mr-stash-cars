"use client"

import { useState } from "react"
import { useLocale } from "@/context/LocaleContext"
import { Button } from "@/components/ui/button"
import { languages } from "@/i18n/settings"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"

export function LocaleSwitcher() {
    const { locale, changeLocale } = useLocale()
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (lang: string) => {
        changeLocale(lang)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{locale}</span>
            </Button>

            {/* Overlay Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Dropdown/Overlay Content */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-48 rounded-md border bg-popover p-1 shadow-md animate-in fade-in zoom-in-95 duration-200">
                    <div className="grid grid-cols-1 gap-1">
                        {languages.map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleSelect(lang)}
                                className={cn(
                                    "flex w-full items-center px-4 py-2 text-sm font-medium rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                                    locale === lang && "bg-accent/50 text-accent-foreground"
                                )}
                            >
                                {/* You could add flags here later */}
                                <span className="flex-1 text-left uppercase">{lang}</span>
                                {locale === lang && <span className="ml-2 text-primary">✓</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
