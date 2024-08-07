import React from 'react'
import styles from './../styles/404.module.scss'
export default function UnknownPage() {
  return (
    <div className={styles["unknown-title"]}>
      The requested page was not found. You may have to wait until the next Star
      Wars installment comes out
    </div>
  )
}
