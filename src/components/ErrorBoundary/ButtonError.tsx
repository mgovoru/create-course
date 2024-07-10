import { Component } from 'react'
import { PropsBegin, StateThrowError } from '../../types'

export class ButtonError extends Component<PropsBegin, StateThrowError> {
  constructor(props: PropsBegin) {
    super(props)
    this.state = { throw: false }
  }

  handleClick = () => {
    this.setState({ throw: true })
  }

  render() {
    if (this.state.throw) {
      throw new Error('Error!')
    }

    return (
      <button onClick={this.handleClick} className="button">
        Error!
      </button>
    )
  }
}
