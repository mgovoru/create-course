import reducer, {
  remove,
  removeAll,
  save,
  toggleChecked,
} from './slice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({ value: [] })
})

test('should handle being added to array', () => {
  const previousState = { value: [] }

  expect(
    reducer(
      previousState,
      save({
        value: {
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
        },
        page: 5,
        checked: true,
      })
    )
  ).toEqual({
    value: [
      {
        checked: true,
        page: 5,
        value: {
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
        },
      },
    ],
  })
})
test('should handle being remove array', () => {
  const previousState = {
    value: [
      {
        value: {
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
        },
        page: 1,
        checked: true,
      },
    ],
  }

  expect(reducer(previousState, removeAll())).toEqual({ value: [] })
})
test('should handle being remove from array', () => {
  const previousState = {
    value: [
      {
        value: {
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
        },
        page: 1,
        checked: true,
      },
    ],
  }

  expect(
    reducer(
      previousState,
      remove({
        value: {
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
        },
        page: 1,
        checked: true,
      })
    )
  ).toEqual({ value: [] })
})
test('should handle being remove from array', () => {
  const previousState = {
    value: [
      {
        value: {
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
        },
        page: 1,
        checked: true,
      },
    ],
  }

	expect(reducer(previousState, toggleChecked())).toEqual(
		{
			value: [
				{
					value: {
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
					},
					page: 1,
					checked: false,
				}]
		}
)
})
