"use client"

import React, { createContext, useContext } from "react"
import { FFContextProvider, useFeatureFlag } from "@harnessio/ff-react-client-sdk"

// ─── Configuration (from .env.local) ──────────────────────────
const HARNESS_API_KEY = process.env.NEXT_PUBLIC_HARNESS_FF_API_KEY || ""

// Target identifies who the flags are being evaluated for
const HARNESS_TARGET = {
    identifier: process.env.NEXT_PUBLIC_HARNESS_FF_TARGET_ID || "anonymous",
    name: process.env.NEXT_PUBLIC_HARNESS_FF_TARGET_NAME || "Anonymous User",
}

// ─── Context ──────────────────────────────────────────────────
interface FeatureFlagContextType {
    /** Get a string feature flag value */
    getFlag: (flagName: string, defaultValue: string) => string
}

const FeatureFlagContext = createContext<FeatureFlagContextType>({
    getFlag: (_flagName: string, defaultValue: string) => defaultValue,
})

export function useFeatureFlags() {
    return useContext(FeatureFlagContext)
}

// ─── Inner Provider (must be inside FFContextProvider) ─────────
function FeatureFlagInner({ children }: { children: React.ReactNode }) {
    // This hook reads flags from the Harness SDK context
    const themeSwitcher = useFeatureFlag("theme_switcher")
    const homePageSwitcher = useFeatureFlag("home_page_switcher")

    const getFlag = (flagName: string, defaultValue: string): string => {
        if (flagName === "theme_switcher") {
            return (themeSwitcher as string) || defaultValue
        }
        if (flagName === "home_page_switcher") {
            return (homePageSwitcher as string) || defaultValue
        }
        return defaultValue
    }

    return (
        <FeatureFlagContext.Provider value={{ getFlag }}>
            {children}
        </FeatureFlagContext.Provider>
    )
}

// ─── Provider ─────────────────────────────────────────────────
export function FeatureFlagProvider({ children }: { children: React.ReactNode }) {
    return (
        <FFContextProvider
            apiKey={HARNESS_API_KEY}
            target={HARNESS_TARGET}
            fallback={false}
            options={{
                baseUrl: "https://config.ff.harness.io/api/1.0",
                eventUrl: "https://events.ff.harness.io/api/1.0",
            }}
        >
            <FeatureFlagInner>
                {children}
            </FeatureFlagInner>
        </FFContextProvider>
    )
}
