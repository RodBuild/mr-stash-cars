"use client"

import React, { createContext, useContext } from "react"
import { FFContextProvider, useFeatureFlag } from "@harnessio/ff-react-client-sdk"

// ─── Configuration ────────────────────────────────────────────
const HARNESS_API_KEY = "0c393a50-91b3-4dca-9f6d-df5f24d5670a"

// Target identifies who the flags are being evaluated for
const HARNESS_TARGET = {
    identifier: 'reactclientsdk',
    name: 'ReactClientSDK',
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

    const getFlag = (flagName: string, defaultValue: string): string => {
        // Currently we only have theme_switcher, but this is extensible
        if (flagName === "theme_switcher") {
            return (themeSwitcher as string) || defaultValue
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
