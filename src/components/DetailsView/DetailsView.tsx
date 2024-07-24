import { useLocation } from 'react-router-dom'
import './DetailsView.scss'
import { useGetHeroesQuery } from '../Api'
import { ApiResult, Person } from '../../types'

export function DetailsView() {
  const location = useLocation()
  const details = new URLSearchParams(location.search).get('details') || '1'

  const {
    data,
    error,
    isLoading,
  } = useGetHeroesQuery(`${details}`)

 const isApiPerson = (response: ApiResult): response is Person => {
   return 'name' in response
 }

  if (isLoading) {
    return (
      <div>
        <div className="loader-block"></div>
      </div>
    )
  }

  if (error) {
    return <div className="error-block">{error.toString()}</div>
  }
  if (data) {
    if (isApiPerson(data)) {
      return (
        <div className="details-hero">
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
  }
}
