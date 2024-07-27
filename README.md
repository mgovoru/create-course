# create-course
Помогло с решением проблемы
npm install https://pkg.csb.dev/reduxjs/redux-toolkit/commit/beb818cb/@reduxjs/toolkit

it('change checkbox', () => {
  const dispatchMock = vi.fn()
  store.dispatch = dispatchMock
  render(
      <Provider store={store}>
        <ListView str={''} isVisible={false} setIsVisible={() => {}} />
      </Provider>
  )
  const checkbox = screen.getByRole('checkbox') as HTMLInputElement
  expect(checkbox.checked).toBe(false)
  fireEvent.click(checkbox)
  expect(dispatchMock).toHaveBeenCalledWith(
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
      page: 1,
      checked: true,
    })
  )
  dispatchMock.mockClear()
  fireEvent.click(checkbox)
  expect(dispatchMock).toHaveBeenCalledWith(
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
})
test('Displays details', () => {

  const data = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    hair_color: 'blond',
    gender: 'male',
    height: '172',
    mass: '77',
    skin_color: 'fair',
  }

  vi.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    })
  )

  render(
    <Provider store={store}>
      <DetailsView />
    </Provider>
  )

  expect(screen.getByText('Luke Skywalker')).not.toBeNull()
  expect(screen.getByText('birth_year 19BBY')).not.toBeNull()
  expect(screen.getByText('hair_color blond')).not.toBeNull()
  expect(screen.getByText('gender male')).not.toBeNull()
  expect(screen.getByText('height 172')).not.toBeNull()
  expect(screen.getByText('mass 77')).not.toBeNull()
  expect(screen.getByText('skin_color fair')).not.toBeNull()
})
