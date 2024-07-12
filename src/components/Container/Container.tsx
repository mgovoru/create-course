import { useState } from 'react'
import { SearchBar } from '../SeachBar/SearchBar'
import './Container.scss'
import { ListView } from '../ListView/ListView'
import { ButtonError } from '../ErrorBoundary/ButtonError'
import { DetailsView } from '../DetailsView/DetailsView'

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
    <div className="container">
      <SearchBar onButtonClick={handleSearch} />
      <ButtonError />
      <div className="heroes">
        <h1 className="title-hero">Characters</h1>
        <div className="parts">
          <ListView str={state.strSearch} />
          <DetailsView />
        </div>
      </div>
    </div>
  )
}
