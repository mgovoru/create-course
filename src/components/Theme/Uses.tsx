import { useContext } from "react"
import { ThemeContext, ThemeSwitchContext } from "./ThemeSwitch"

export function useTheme() {
  return useContext(ThemeContext)
}
export function useSwitchTheme() {
  return useContext(ThemeSwitchContext)
}
