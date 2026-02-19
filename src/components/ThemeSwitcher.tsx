"use client"

import { useFeatureFlags } from "@/context/FeatureFlagContext"
import { getThemeCSS, DEFAULT_THEME, type ThemeId } from "@/config/themes"

/**
 * ThemeSwitcher reads the `theme_switcher` feature flag from Harness
 * and injects the corresponding color palette CSS variables into the DOM.
 *
 * Flag values: theme_1, theme_2, theme_3, theme_4, theme_5
 * Default: theme_1 (Electric Classic)
 */
export function ThemeSwitcher() {
    const { getFlag } = useFeatureFlags()
    const themeFlag = getFlag("theme_switcher", DEFAULT_THEME) as ThemeId

    // Validate the flag value is a known theme
    const validThemes: ThemeId[] = ["theme_1", "theme_2", "theme_3", "theme_4", "theme_5"]
    const activeTheme: ThemeId = validThemes.includes(themeFlag) ? themeFlag : DEFAULT_THEME

    const css = getThemeCSS(activeTheme)

    return <style dangerouslySetInnerHTML={{ __html: css }} />
}
