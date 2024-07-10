import { useState } from 'react'
import './ListView.scss'
import { Person, PropsStr } from '../../types'
import axios from 'axios'

export function ListView(props: PropsStr) {
  const [state, setState] = useState({
    people: [],
    loading: true,
    error: null,
    strSearch: props.str,
  })

  axios
    .get(`https://swapi.dev/api/people/?page=1&&search=${state.strSearch}`)
    .then((response) => {
      setState((prevState) => ({
        ...prevState,
        people: response.data.results,
        loading: false,
      }))
    })
    .catch((error) => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        error: error.message,
      }))
    })

  const { people, loading, error } = state

  if (loading) {
    return <div className="loader-block"></div>
  }

  if (error) {
    return <div className="error-block">{error}</div>
  }

  return (
    <div className="perspective">
      {people.map((person: Person, index: number) => (
        <div key={index} className="lists-hero">
          <span>{person.name}</span>
          <span>{person.gender}</span>
          <span>birth_year {person.birth_year}</span>
          <span>hair_color {person.hair_color}</span>
          <span>eye_color {person.eye_color}</span>
        </div>
      ))}
    </div>
  )
}
