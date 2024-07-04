import { Component } from 'react'
import { SearchBar } from '../SeachBar/SearchBar'

export class Container extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar />
      </div>
    )
  }
}
