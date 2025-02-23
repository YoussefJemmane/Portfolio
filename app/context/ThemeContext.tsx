'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => null
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  console.log('Current theme:', theme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')

      const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
        root.classList.remove('light', 'dark')
        root.classList.add(e.matches ? 'dark' : 'light')
        console.log(`System theme updated to: ${e.matches ? 'dark' : 'light'}`)
      }

      // Set initial theme
      updateTheme(systemTheme)

      // Add listener for theme changes
      systemTheme.addEventListener('change', updateTheme)

      return () => systemTheme.removeEventListener('change', updateTheme)
    } else {
      root.classList.add(theme)
      console.log(`Theme manually set to: ${theme}`)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
