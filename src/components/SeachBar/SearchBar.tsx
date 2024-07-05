import { ChangeEvent, Component } from 'react'
import './SeachBar.scss'
import { ClickProps, State } from '../../types'

export class SearchBar extends Component<ClickProps, State> {
  constructor(props: ClickProps) {
    super(props)
    this.state = {
      people: [],
      loading: true,
      error: null,
      strSearch: '',
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  inputChange(event: ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('search', event.target.value)
  }
  handleButtonClick() {
    this.props.onButtonClick(localStorage.getItem('search') as string)
  }
  render() {
    return (
      <form>
        <div className="search">
          <input
            type="text"
            className="search-input"
            name="text-input"
            onChange={(event) => this.inputChange(event)}
          ></input>
        </div>
        <div>
          <button
            type="submit"
            className="button"
            onClick={this.handleButtonClick}
          >
            Search
          </button>
        </div>
      </form>
    )
  }
}
