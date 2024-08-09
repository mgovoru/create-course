import router from 'next/router'
import { useEffect, useState } from 'react'

export function ButtonError() {
  const [hasError, setHasError] = useState<boolean>(false)

  function handleClick() {
    setHasError(true)
  }
  useEffect(() => {
          if (hasError) {
            router.push('_error')
          }
  }, [hasError])

  return (
    <button onClick={handleClick} className="button">
      Error!
    </button>
  )
}
