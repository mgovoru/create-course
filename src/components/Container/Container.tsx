import { useState } from 'react'
import { SearchBar } from '../SeachBar/SearchBar'
import styles from '../../styles/container.module.scss'
import { ListView } from '../ListView/ListView'
import { ButtonError } from '../ErrorBoundary/ButtonError'
import { dataResponsePeople, propsCommon } from '../../base/types'
import { useSwitchTheme, useTheme } from '../Theme/Uses'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../Store/store'
import { DetailsView } from '../DetailsView/DetailsView'

export function Container(props: propsCommon) {
  const [state, setState] = useState<dataResponsePeople>({
    people: [],
    loading: true,
    error: null,
    strSearch: '',
  })
  const [isVisible, setIsVisible] = useState(false)

  const darkTheme = useTheme()

  const switchTheme = useSwitchTheme()

  const themeStyle = {
    backgroundImage: darkTheme
      ? `url('images/dark.jpg')`
      : `url('images/light.jpg')`,
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
    <Provider store={store}>
      <div className={styles['container']} style={themeStyle}>
        <button onClick={switchTheme} className={styles.button}>
          change theme
        </button>
        <SearchBar onButtonClick={handleSearch} />
        <ButtonError />
        <div className={styles.heroes}>
          <h1 className={styles.titlehero}>Characters</h1>
          <div className={styles.parts}>
            <ListView
              str={state.strSearch}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              heroes={props.data}
            />
            {isVisible && <DetailsView hero={props.hero} />}
          </div>
        </div>
      </div>
    </Provider>
  )
}
