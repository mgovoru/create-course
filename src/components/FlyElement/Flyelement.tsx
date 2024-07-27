import { useDispatch, useSelector } from 'react-redux'
import { removeAll, toggleChecked } from '../Store/slice'
import './Flyelement.scss'
import { PropsFlyVisible, rootState } from '../../types'
import close from './../../assets/close.svg'
import { saveAs } from 'file-saver'

export function Flyelement(props: PropsFlyVisible) {
  const dispatch = useDispatch()
  const checkedArray = useSelector((state: rootState) => state.card.value)

  function unselectAll() {
    dispatch(toggleChecked())
    dispatch(removeAll())
  }
  function closeElement() {
    props.setFlyisVisible((prevState) => !prevState)
  }
  function downloadAll() {
    checkedArray.forEach((el) => {
      console.log(el)
    })
  }
  function convertArrayToCSV() {
    const headers = Object.keys(checkedArray[0].value).join(';')
    const charactersCsv: string[] = [headers]

    checkedArray.forEach((el) => {
      const person = el.value
      const values = [
        person.name,
        person.height,
        person.mass,
        person.hair_color,
        person.skin_color,
        person.eye_color,
        person.birth_year,
        person.gender,
        person.homeworld,
        person.films.join(','),
        person.species.join(','),
        person.vehicles.join(','),
        person.starships.join(','),
        person.created,
        person.edited,
        person.url,
      ].join(';')

      charactersCsv.push(values)
    })

    return charactersCsv.join('\r\n')
  }
  const downloadCSV = () => {
    const csvData = convertArrayToCSV()
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, `${checkedArray.length}_characters_starwars.csv`)
  }
  return (
    <div className="fly-modal">
      <div className="fly-content">
        <button type="submit" className="button-svg" onClick={closeElement}>
          <img src={close} alt="" className="close-svg" />
        </button>
        {`${checkedArray.length} items are selected`}
        <button
          type="submit"
          className="button button-unselect"
          onClick={unselectAll}
        >
          Unselect all
        </button>
        <button type="submit" className="button button-download" onClick={downloadAll}>
          <a className="link-download" href="#" onClick={downloadCSV}>
            Download
          </a>
        </button>
      </div>
    </div>
  )
}
