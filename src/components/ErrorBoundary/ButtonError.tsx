import { useState } from 'react'

export function ButtonError() {
  const [state, setState] = useState({
    throw: false,
  })

  function handleClick() {
    setState((prevState) => ({
      ...prevState,
      throw: true,
    }))
  }

  if (state.throw) {
    throw new Error('Error!')
  }

  return (
    <button onClick={handleClick} className="button">
      Error!
    </button>
  )
}
