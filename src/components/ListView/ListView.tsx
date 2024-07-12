import { useEffect, useState } from 'react'
import './ListView.scss'
import { Person, PropsStr } from '../../types'
import axios from 'axios'
import { Outlet, useParams } from 'react-router-dom'
import { Pagination } from './Pagination'




export function ListView(props: PropsStr) {
  const [state, setState] = useState({
    people: [],
    loading: true,
    error: null,
    strSearch: props.str,
    total: 0,
  })
  const charPerPage = 10;
  const { page } = useParams()
  const pageNum = parseInt(page as string, 10) || 1;
   useEffect(() => {
     axios
       .get(
         `https://swapi.dev/api/people/?page=${pageNum}&&search=${state.strSearch}`
       )
       .then((response) => {
         setState((prevState) => ({
           ...prevState,
           people: response.data.results,
           loading: false,
           total: response.data.count,
         }))
       })
       .catch((error) => {
         setState((prevState) => ({
           ...prevState,
           loading: false,
           error: error.message,
         }))
       })
   }, [page, pageNum, state.strSearch])

  const { people, loading, error, total } = state

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
          {person.name}
          {/* <span>{person.gender}</span>
          <span>birth_year {person.birth_year}</span>
          <span>hair_color {person.hair_color}</span>
          <span>eye_color {person.eye_color}</span> */}
        </div>
      ))}
      <Pagination totalPages={Math.ceil(total / charPerPage)} />
      <Outlet />
    </div>
  )
}
