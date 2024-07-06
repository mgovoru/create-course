import { Component } from "react"
import { PropsError, StateError } from "../../types"
import { ButtonError } from "./ButtonError"

export class ErrorBoundary extends Component<PropsError, StateError> {
  constructor(props: PropsError) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
	}
	
  render() {
    if (this.state.hasError) {
      return (<><ButtonError /><h1>Something went wrong.</h1></>)
		}
		return this.props.children
	}
}
