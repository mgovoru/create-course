import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { dataResponse } from '../../types';
import './DetailsView.scss'

export function DetailsView() {
  const location = useLocation()
  const details = new URLSearchParams(location.search).get('details') || '1';
  const [state, setState] = useState<dataResponse>(
    { data: {}, loading: true, error: null })

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${details}`)
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          data: response.data,
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
      console.log(data)

  if (loading) {
    return (
      <div>
        <div className="loader-block"></div>
      </div>
    )
  }

  if (error) {
    return <div className="error-block">{error}</div>
  }

  return (
    <div className="details-hero" >
      <div key={details} className="hero">
        <div>{data.name}</div>
        <div>birth_year {data.birth_year}</div>
        <div>hair_color {data.hair_color}</div>
        <div>gender {data.gender}</div>
        <div>height {data.height}</div>
        <div>mass {data.mass}</div>
        <div>skin_color {data.skin_color}</div>
      </div>
    </div>
  )
}
