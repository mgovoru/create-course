import React from 'react'
import { render } from '@testing-library/react'
import { afterEach, beforeEach, describe, it, vi } from 'vitest'
import Page from './../src/pages/page/[page]'


export const HeroesService = {
  getHeroes: vi.fn(),
  getHero: vi.fn(),
}
describe('Page Component', () => {
	const mockData = {
		count: 0,
		next: null,
		previous: null,
		results: []
	}
	const mockHero = {
		name: 'string',
		height: 'string',
		mass: 'string',
		hair_color: 'string',
		skin_color: 'string',
		eye_color: 'string',
		birth_year: 'string',
		gender: 'string',
		homeworld: 'string',
		films: [],
		species: [],
		vehicles: [],
		starships: [],
		created: 'string',
		edited: 'string',
		url: 'string',
	}

	beforeEach(() => {
		vi.clearAllMocks()
	})

	afterEach(() => {
		vi.resetAllMocks()
	})

	it('should render Container with data and hero', () => {
		render(<Page data={mockData} hero={mockHero} />)
	})
})
