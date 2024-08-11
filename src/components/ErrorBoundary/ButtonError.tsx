import React from 'react'
import { useRouter } from 'next/router'
//import { useEffect, useState } from 'react'

export function ButtonError() {
  // const [hasError, setHasError] = useState<boolean>(false)
  const router = useRouter()
  function handleClick() {
    router.push('_error')
    // setHasError(true)
  }
  // useEffect(() => {
  //   if (hasError) {
  //     router.push('_error')
  //   }
  // }, [hasError])

  return (
    <button onClick={handleClick} className="button">
      Error!
    </button>
  )
}
