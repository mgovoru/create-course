import { useState } from 'react'
import { SearchBar } from '../SeachBar/SearchBar'
import './Container.scss'
import { ListView } from '../ListView/ListView'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { ButtonError } from '../ErrorBoundary/ButtonError'

export function Container() {
  const [state, setState] = useState({
    people: [],
    loading: true,
    error: null,
    strSearch: localStorage.getItem('search') || '',
  })

  function handleSearch(str: string) {
    setState((prevState) => ({
      ...prevState,
      strSearch: str,
    }))
  }
  return (
    <ErrorBoundary>
      <div className="container">
        <SearchBar onButtonClick={handleSearch} />
        <ButtonError />
        <div className="heroes">
          <h1 className="title-hero">Characters</h1>
          <ListView str={state.strSearch} />
        </div>
      </div>
    </ErrorBoundary>
  )
}
