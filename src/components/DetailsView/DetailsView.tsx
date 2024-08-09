import styles from '../../styles/DetailsView.module.scss'
import { propsHero} from '../../base/types'
import { useRouter } from 'next/router'

export function DetailsView(props: propsHero) {
  const router = useRouter()
  const { details } = router.query

  // if (isLoading) {
  //   return (
  //     <div>
  //       <div className={styles.loaderblock}></div>
  //     </div>
  //   )
  // }

  // if (error) {
  //   return <div className="error-block">{error.toString()}</div>
  // }
  // if (data) {
  //   if (isApiPerson(data)) {
  if (props.hero && 'name' in props.hero) {
    return (
      <div className={styles['details-hero']}>
        <div key={String(details)} className={styles['hero']}>
          <div>{props.hero.name}</div>
          <div>birth_year {props.hero.birth_year}</div>
          <div>hair_color {props.hero.hair_color}</div>
          <div>gender {props.hero.gender}</div>
          <div>height {props.hero.height}</div>
          <div>mass {props.hero.mass}</div>
          <div>skin_color {props.hero.skin_color}</div>
        </div>
      </div>
    )
  }
}
//   }
// }
