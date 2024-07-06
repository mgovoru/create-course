import { Component } from 'react'
import { SearchBar } from '../SeachBar/SearchBar'
import './Container.scss'
import { ListView } from '../ListView/ListView'
import { PropsBegin, State } from '../../types'
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary'
import { ButtonError } from '../ErrorBoundary/ButtonError'

export class Container extends Component<PropsBegin, State> {
  constructor(props: PropsBegin) {
    super(props)
    this.state = {
      people: [],
      loading: true,
      error: null,
      strSearch: localStorage.getItem('search') || '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(str: string) {
    this.setState({ strSearch: str })
  }
  render() {
    return (
      <div className="container">
        <SearchBar onButtonClick={this.handleSearch} />
        <ErrorBoundary>
          <ButtonError />
          <div>
            <h1>Characters</h1>
            <ListView str={this.state.strSearch} />
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}
