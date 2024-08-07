import { ChangeEvent } from 'react'
import styles from '../../styles/seachBar.module.scss'
import { ClickProps } from '../../base/types'
import { useRouter } from 'next/router'
//import { useNavigate } from 'react-router-dom'
//import { useRouter } from 'next/router'

export function SearchBar(props: ClickProps) {
  //const navigate = useNavigate()
  const router = useRouter()
  function inputChange(event: ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('search', event.target.value.trim())
  }
  function handleButtonClick() {
    // navigate('/')
    router.push('/')
    props.onButtonClick(localStorage.getItem('search') as string)
  }
  function handleButtonClickReset() {
    localStorage.clear()
    props.onButtonClick('')
  }
  return (
    <form className={styles["form"]}>
      <div className={styles["search"]}>
        <input
          type="text"
          className={styles["search-input"]}
          name="text-input"
          onChange={(event) => inputChange(event)}
        ></input>
      </div>
      <div>
        <button type="submit" className={styles["button"]} onClick={handleButtonClick}>
          Search
        </button>
        <button
          type="submit"
          className={styles["button"]}
          onClick={handleButtonClickReset}
        >
          Reset
        </button>
      </div>
    </form>
  )
}
