import { screen } from '@testing-library/react'
import { render } from './render'
import { ListView } from '../src/components/ListView/ListView'
import { SetStateAction } from 'react'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { DetailsView } from '../src/components/DetailsView/DetailsView'
import { Flyelement } from '../src/components/FlyElement/Flyelement'
import { UnknownPage } from '../src/components/404/404'
import { Pagination } from '../src/components/ListView/Pagination'
import { ErrorBoundary } from '../src/components/ErrorBoundary/ErrorBoundary'
import { ButtonError } from '../src/components/ErrorBoundary/ButtonError'
import React from 'react'
import App from '../src/App'

describe('renders', () => {
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
    const blockItem = screen.findByTestId('perspective')
    expect(blockItem).not.toBeNull()
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
     it('renders the component', () => {
       render(
         <Provider store={store}>
           <UnknownPage />
         </Provider>
       )
       const block = screen.findByTestId('unknown-title')
       expect(block).not.toBeNull()
     })
      it('renders the component', () => {
        render(
          <Provider store={store}>
            <Pagination totalPages={10} />
          </Provider>
        )
        const block = screen.findByTestId('pagination')
        expect(block).not.toBeNull()
      })
    it('renders the component', () => {
      render(
        <Provider store={store}>
          <ErrorBoundary children={undefined}>
          </ErrorBoundary>
        </Provider>
      )
      const block = screen.findByTestId('error-title')
      expect(block).not.toBeNull()
    })
   it('renders error', () => {
     const error = new Error('Test error')
     const { getByText } = render(
       <div className="error-block">{error.toString()}</div>
     )
     expect(getByText('Error: Test error')).not.toBeNull()
   })
     it('renders the component', () => {
       render(
         <Provider store={store}>
           <ButtonError></ButtonError>
         </Provider>
       )
       const block = screen.findByTestId('Error!')
       expect(block).not.toBeNull()
     })
      it('renders the component', () => {
        render(
          <React.StrictMode>
            <Provider store={store}>
              <ErrorBoundary>
                <App />
              </ErrorBoundary>
            </Provider>
          </React.StrictMode>
        )
        const block = screen.findByTestId('Characters')
        expect(block).not.toBeNull()
      })
})
