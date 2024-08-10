import React from 'react'
import { ChangeEvent } from 'react'
import styles from '../../styles/seachBar.module.scss'
import { ClickProps } from '../../base/types'
import router from 'next/router'

export function SearchBar(props: ClickProps) {
  function inputChange(event: ChangeEvent<HTMLInputElement>) {
    event.stopPropagation()
    event.preventDefault()
    localStorage.setItem('search', event.target.value.trim())
  }
  function handleButtonClick() {
    router.push(`/?page=1&&search=${localStorage.getItem('search') as string}`)
  }
  function handleButtonClickReset() {
    localStorage.clear()
    props.onButtonClick('')
  }
  return (
    <form className={styles['form']}>
      <div className={styles['search']}>
        <input
          type="text"
          className={styles['search-input']}
          name="text-input"
          onChange={(event) => inputChange(event)}
        ></input>
      </div>
      <div>
        <button
          type="submit"
          className={styles['button']}
          onClick={handleButtonClick}
        >
          Search
        </button>
        <button
          type="submit"
          className={styles['button']}
          onClick={handleButtonClickReset}
        >
          Reset
        </button>
      </div>
    </form>
  )
}
