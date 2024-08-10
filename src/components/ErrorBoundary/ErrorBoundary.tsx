import React from 'react'
import { Component } from 'react'
import { PropsError, StateError } from '../../base/types'
import styles from '../../styles/Error.module.scss'

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
      return (
        <>
          <h1 className={styles['error-title']}>
            Something went wrong. Star Wars heroes disappeared in an unknown
            direction.
          </h1>
        </>
      )
    }
    return this.props.children
  }
}
