import React from 'react'
import { screen } from '@testing-library/react'
import { render } from './render'
import { Provider } from 'react-redux'
import store from '../src/components/Store/store'
import { DetailsView } from '../src/components/DetailsView/DetailsView'

test('renders the component DetailsView', () => {
  const mockHero = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'string',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'string',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: 'string',
    edited: 'string',
    url: 'string',
  }
  render(
    <Provider store={store}>
      <DetailsView hero={mockHero } />
    </Provider>
  )
  const block = screen.findByTestId('details-hero')
  expect(block).not.toBeNull()
  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
  expect(screen.getByText('birth_year 19BBY')).toBeInTheDocument()
  expect(screen.getByText('hair_color blond')).toBeInTheDocument()
  expect(screen.getByText('gender male')).toBeInTheDocument()
  expect(screen.getByText('height 172')).toBeInTheDocument()
  expect(screen.getByText('mass 77')).toBeInTheDocument()
  expect(screen.getByText('skin_color fair')).toBeInTheDocument()

})
