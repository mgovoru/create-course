import Link from 'next/link'
import { PropsNumber } from '../../base/types'
import styles from '../../styles/Pagination.module.scss'

export function Pagination(props: PropsNumber) {
  return (
    <div className={styles['pagination']}>
      {Array.from({ length: props.totalPages }, (_, i) => (
        <Link key={i} href={`/page/${i + 1}`} className={styles["link"]}>
          {i + 1}
        </Link>
      ))}
    </div>
  )
}
