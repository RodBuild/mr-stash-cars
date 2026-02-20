"use client"

import { useFeatureFlags } from "@/context/FeatureFlagContext"
import { HomeLayout1 } from "./layouts/HomeLayout1"
import { HomeLayout2 } from "./layouts/HomeLayout2"
import { HomeLayout3 } from "./layouts/HomeLayout3"
import { HomeLayout4 } from "./layouts/HomeLayout4"
import { HomeLayout5 } from "./layouts/HomeLayout5"

interface HomePageSwitcherProps {
    translations: Record<string, string>
}

export function HomePageSwitcher({ translations }: HomePageSwitcherProps) {
    const { getFlag } = useFeatureFlags()

    const layoutFlag = getFlag("home_page_switcher", "home_layout_1")

    // Helper for translations
    const t = (key: string, defaultValue: string) => {
        return translations[key] || defaultValue
    }

    switch (layoutFlag) {
        case "home_layout_2":
            return <HomeLayout2 t={t} />
        case "home_layout_3":
            return <HomeLayout3 t={t} />
        case "home_layout_4":
            return <HomeLayout4 t={t} />
        case "home_layout_5":
            return <HomeLayout5 t={t} />
        case "home_layout_1":
        default:
            return <HomeLayout1 t={t} />
    }
}
