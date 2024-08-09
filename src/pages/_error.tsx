import styles from '../styles/Error.module.scss'
import { ErrorPageProps } from '../base/types'

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }) => {
  return (
    <>
      <h1 className={styles['error-title']}>
        Error{statusCode}
        Something went wrong. Star Wars heroes disappeared in an unknown
        direction.
      </h1>
    </>
  )
}
export default ErrorPage
