import React from 'react'
import { useState } from 'react'
import styles from '../../styles/ListView.module.scss'
import { Person, PropsStr, rootState } from '../../base/types'
import { Pagination } from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { remove, save } from '../Store/slice'
import { Flyelement } from '../FlyElement/Flyelement'
import { useRouter } from 'next/router'

export function ListView(props: PropsStr) {
  const router = useRouter()
  const { page } = router.query
  const pageNum = parseInt(page as string, 10) || 1

  let data
  if (props.heroes && 'results' in props.heroes) {
    data = props.heroes.results
  }
  const charPerPage = 10

  const dispatch = useDispatch()
  const checkedArray = useSelector((state: rootState) => state.card?.value)
  const [flyIsVisible, setFlyIsVisible] = useState(false)

  function handlePersonClick(index: string) {
    props.setIsVisible((prevState: boolean) => !prevState)
    router.push(`/?page=${pageNum}&details=${Number(index)}`)
  }
  const isChecked = (person: Person) => {
    if (Array.isArray(checkedArray) && checkedArray.length > 0) {
      const elem = checkedArray.filter((el) => el.value.name === person.name)[0]
      return elem?.checked && elem?.page === pageNum
    }
    return false
  }
  let total = 0

  if (props.heroes && 'results' in props.heroes) {
    total = props.heroes.count
  }
  return (
    <div className={styles['perspective']}>
      {data?.map((person: Person, index: number) => (
        <div className={styles['ul-item']} key={index}>
          <input
            type="checkbox"
            className={styles['input-checkbox']}
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
            }}
          />
          <div
            className={styles['lists-hero']}
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
