import { useState } from 'react'
import './ListView.scss'
import { Person, PropsStr, rootState } from '../../types'
import { useParams, useSearchParams } from 'react-router-dom'
import { Pagination } from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { remove, save } from '../Store/slice'
import store from '../Store/store'
import { Flyelement } from '../FlyElement/Flyelement'
import { heroesApi } from '../Api'

export function ListView(props: PropsStr) {
  const { page } = useParams()
  const pageNum = parseInt(page as string, 10) || 1
  const { useGetHeroesQuery } = heroesApi
  // eslint-disable-next-line react-compiler/react-compiler
  const { data = [], error, isLoading } = useGetHeroesQuery(
    `?page=${pageNum}&&search=${props.str}`
  )

  const charPerPage = 10

  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()
  const checkedArray = useSelector((state: rootState) => state.card.value)
  const [flyIsVisible, setFlyIsVisible] = useState(false)
  console.log(data)
  const people = data.results
  const total = data.count
  function handlePersonClick(index: string) {
    props.setIsVisible((prevState: boolean) => !prevState)
    searchParams.set('details', index)
    setSearchParams(searchParams)
  }


  if (isLoading) {
    return (
      <div>
        <div className="loader-block"></div>
      </div>
    )
  }

  if (error) {
    console.error(error)
    return <div className="error-block">{error.data.detail}</div>
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
      {people?.map((person: Person, index: number) => (
        <div className="ul-item" key={index}>
          <input
            type="checkbox"
            className="input-checkbox"
            checked={isChecked(person) || false}
            onChange={(event) => {
              if (event.target.checked) {
                dispatch(save({ value: person, page: pageNum, checked: true }))
                if (!flyIsVisible) {
                  setFlyIsVisible((prevState) => !prevState)
                }
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
