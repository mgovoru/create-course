import { screen } from '@testing-library/react'
import { render } from './render'
import { ListView } from '../src/components/ListView/ListView'
import { SetStateAction } from 'react'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { DetailsView } from '../src/components/DetailsView/DetailsView'
import { Flyelement } from '../src/components/FlyElement/Flyelement'

describe('ListView', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <ListView
          str={''}
          isVisible={false}
          setIsVisible={function (value: SetStateAction<boolean>): void {
            console.log(value)
            throw new Error('Function not implemented.')
          }}
        />
      </Provider>
    )
    const block = screen.findByTestId('loader-block')
    expect(block).not.toBeNull()
  })
  
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <DetailsView />
      </Provider>
    )
    const block = screen.findByTestId('details-hero')
    expect(block).not.toBeNull()
  })
    it('renders the component', () => {
      render(
        <Provider store={store}>
          <Flyelement
            flyisVisible={false}
            setFlyisVisible={function (value: SetStateAction<boolean>): void {
              console.log(value)
              throw new Error('Function not implemented.')
            }}
          />
        </Provider>
      )
      const block = screen.findByTestId('details-hero')
      expect(block).not.toBeNull()
    })
})
