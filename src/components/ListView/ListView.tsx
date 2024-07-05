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
      <div>
        {people.map((person: Person, index: number) => (
          <div key={index}>{person.name}</div>
        ))}
      </div>
    )
  }
}
