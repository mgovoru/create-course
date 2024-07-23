import { useEffect, useState } from 'react'
import './ListView.scss'
import { Person, PropsStr, rootState } from '../../types'
import axios from 'axios'
import { useParams, useSearchParams } from 'react-router-dom'
import { Pagination } from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { remove, save } from '../Store/slice'
import store from '../Store/store'
import { Flyelement } from '../FlyElement/Flyelement'

export function ListView(props: PropsStr) {
  const [state, setState] = useState({
    people: [],
    loading: true,
    error: null,
    strSearch: props.str,
    total: 0,
  })
  const charPerPage = 10
  const { page } = useParams()
  const pageNum = parseInt(page as string, 10) || 1
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const checkedArray = useSelector((state: rootState) => state.card.value)
  const [flyIsVisible, setFlyIsVisible] = useState(false)

  function handlePersonClick(index: string) {
    props.setIsVisible((prevState: boolean) => !prevState)
    searchParams.set('details', index)
    setSearchParams(searchParams)
  }

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
    return (
      <div>
        <div className="loader-block"></div>
      </div>
    )
  }

  if (error) {
    return <div className="error-block">{error}</div>
  }
  const isChecked = (person: Person) => {
    if (Array.isArray(checkedArray) && checkedArray.length > 0) {
      const elem = checkedArray.filter((el) => el.value.name === person.name)[0]
      return elem?.checked && elem?.page === pageNum
    }
    return false
  }

  return (
    <div className="perspective">
      {people.map((person: Person, index: number) => (
        <div className="ul-item" key={index}>
          <input
            type="checkbox"
            className="input-checkbox"
            checked={isChecked(person) || false}
            onChange={(event) => {
              if (event.target.checked) {
                dispatch(save({ value: person, page: pageNum, checked: true }))
                if (!flyIsVisible) { setFlyIsVisible((prevState) => !prevState) }
              } else {
                dispatch(
                  remove({ value: person, page: pageNum, checked: false })
                )
              }
              console.log(store.getState())
            }}
          />
          <div
            className="lists-hero"
            onClick={() =>
              handlePersonClick(
                String(person.url.slice(-3, -1).replace(/\//g, ''))
              )
            }
          >
            {person.name}
          </div>
        </div>
      ))}
      <Pagination totalPages={Math.ceil(total / charPerPage)} />
      {flyIsVisible && (
        <Flyelement
          flyisVisible={flyIsVisible}
          setFlyisVisible={setFlyIsVisible}
        />
      )}
    </div>
  )
}
