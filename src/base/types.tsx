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
  isVisible: boolean
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
  heroes: ApiResponse
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
export interface PropsNumber {
  totalPages: number
}
export interface dataResponse {
  data: Partial<Person>
  loading: boolean
  error: null | string
}
export interface PropsVisible {
  isVisible: boolean
}
export interface dataResponsePeople {
  people: Person[]
  loading: boolean
  error: null | string
  strSearch: string
}
export interface ThemeProps {
  children: React.ReactNode
}
export interface saveState {
  value: PersonPage[]
}
export interface PersonPage {
  value: Person
  page: number
  checked: boolean
}
export interface rootState {
  card: saveState
}
export interface PropsFlyVisible {
  flyisVisible: boolean
  setFlyisVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: Person[]
}
export type ApiResult = ApiResponse | Person
export interface PersonData {
  heroes: Person[]
}
export interface propsHero {
  hero?: Person
}
export interface propsCommon {
  data: ApiResponse
  hero?:Person
 }
