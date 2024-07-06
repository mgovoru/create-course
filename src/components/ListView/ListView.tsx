import { Component } from 'react'
import './ListView.scss'
import { Person, PropsStr, State } from '../../types'
import axios from 'axios'

export class ListView extends Component<PropsStr, State> {
  constructor(props: PropsStr) {
    super(props)
    this.state = {
      people: [],
      loading: true,
      error: null,
      strSearch: this.props.str,
    }
  }
  componentDidMount() {
    this.componentApi()
  }

  componentApi() {
    axios
      .get(`https://swapi.dev/api/people/?search=${this.state.strSearch}`)
      .then((response) => {
        this.setState({ people: response.data.results, loading: false })
      })
      .catch((error) => {
        this.setState({ loading: false, error: error.message })
      })
  }
  render() {
    const { people, loading, error } = this.state

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
      <div  className="perspective">
        {people.map((person: Person, index: number) => (
          <div key={index} className='lists'>
            <span>{person.name}</span>
            <span>{person.gender}</span>
            <span>birth_year {person.birth_year}</span>
            <span>hair_color {person.hair_color}</span>
            <span>eye_color {person.eye_color}</span>
          </div>
        ))}
      </div>
    )
  }
}
