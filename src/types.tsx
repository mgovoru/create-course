import { ReactNode } from 'react'

export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export interface ApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Person[]
}

export interface State {
  people: Person[]
  loading: boolean
  error: string | null
  strSearch: string
}

export interface ClickProps {
  onButtonClick: (str: string) => void
}

export interface PropsStr {
  str: string
}
export interface PropsError {
  children: ReactNode
}
export interface StateError {
  hasError: boolean
}
export interface StateThrowError {
  throw: boolean
}
