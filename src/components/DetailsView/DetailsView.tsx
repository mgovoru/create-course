import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Person } from '../../types'

export function DetailsView() {
  const location = useLocation()
	const details = new URLSearchParams(location.search).get('details')
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  })
  useEffect(() => {
    axios
      .get(
        `https://swapi.dev/api/people/?${details}`
      )
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          data: response.data.results,
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
  }, [details])

  const { data, loading, error } = state

  if (loading) {
    return <div className="loader-block"></div>
  }

  if (error) {
    return <div className="error-block">{error}</div>
  }

  return (
    <div className="perspective">
      {data.map((person: Person, index: number) => (
        <div key={index} className="lists-hero">
          <span>{person.gender}</span>
          <span>birth_year {person.birth_year}</span>
          <span>hair_color {person.hair_color}</span>
          <span>eye_color {person.eye_color}</span>
        </div>
      ))}
    </div>
  )
}
