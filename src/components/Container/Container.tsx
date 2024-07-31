import { useState } from 'react'
import { SearchBar } from '../SeachBar/SearchBar'
import './Container.scss'
import { ListView } from '../ListView/ListView'
import { ButtonError } from '../ErrorBoundary/ButtonError'
import { DetailsView } from '../DetailsView/DetailsView'
import { dataResponsePeople } from '../../base/types'
import { useSwitchTheme, useTheme } from '../Theme/Uses'
// import darkImage from './../../assets/dark.jpg'
// import lightImage from './../../assets/light.jpg'

export function Container() {
  const [state, setState] = useState<dataResponsePeople>({
    people: [],
    loading: true,
    error: null,
    strSearch: localStorage.getItem('search') || '',
  })

  const [isVisible, setIsVisible] = useState(false)

  const darkTheme = useTheme()

  const switchTheme = useSwitchTheme()

  const themeStyle = {
    backgroundImage: darkTheme
      ? `url('dark.jpg')`
      : `url('light.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: darkTheme ? '#2F12B0' : '#9702A7',
  }

  function handleSearch(str: string) {
    setState((prevState) => ({
      ...prevState,
      strSearch: str,
    }))
  }
  return (
    <div className="container" style={themeStyle}>
      <button onClick={switchTheme} className="button">
        change theme
      </button>
      <SearchBar onButtonClick={handleSearch} />
      <ButtonError />
      <div className="heroes">
        <h1 className="title-hero">Characters</h1>
        <div className="parts">
          <ListView
            str={state.strSearch}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
          {isVisible && <DetailsView />}
        </div>
      </div>
    </div>
  )
}
