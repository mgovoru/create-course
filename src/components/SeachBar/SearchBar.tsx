import { ChangeEvent } from 'react'
import './SeachBar.scss'
import { ClickProps } from '../../types'

export function SearchBar(props: ClickProps) {
  function inputChange(event: ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('search', event.target.value.trim())
  }
  function handleButtonClick() {
    props.onButtonClick(localStorage.getItem('search') as string)
  }
  function handleButtonClickReset() {
    localStorage.clear()
    props.onButtonClick('')
  }
  return (
    <form className="form">
      <div className="search">
        <input
          type="text"
          className="search-input"
          name="text-input"
          onChange={(event) => inputChange(event)}
        ></input>
      </div>
      <div>
        <button type="submit" className="button" onClick={handleButtonClick}>
          Search
        </button>
        <button
          type="submit"
          className="button"
          onClick={handleButtonClickReset}
        >
          Reset
        </button>
      </div>
    </form>
  )
}
