import { createContext, useState } from 'react'
import { ThemeProps } from '../../types'

export const ThemeContext = createContext(true)
export const ThemeSwitchContext = createContext(() => {})

export function Theme({ children }: ThemeProps) {
  const [dark, setDarkSwitch] = useState(true)
  function toggleTheme() {
    setDarkSwitch((prevState) => !prevState)
  }
  return (
    <ThemeContext.Provider value={dark}>
      <ThemeSwitchContext.Provider value={toggleTheme}>
        {children}
      </ThemeSwitchContext.Provider>
    </ThemeContext.Provider>
  )
}
