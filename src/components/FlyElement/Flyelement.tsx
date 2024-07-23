import { useDispatch, useSelector } from 'react-redux'
import { removeAll, toggleChecked } from '../Store/slice'
import './Flyelement.scss'
import { PropsFlyVisible, rootState } from '../../types'
import close from './../../assets/close.svg'

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
  return (
    <div className="fly-modal">
      <div className="fly-content">
        <button type="submit" className="button-svg" onClick={closeElement}>
          <img src={close} alt="" className="close-svg" />
        </button>
        { `${checkedArray.length} items are selected` }
        <button type="submit" className="button" onClick={unselectAll}>
          Unselect all
        </button>
        <button type="submit" className="button" onClick={downloadAll}>
          Download
        </button>
      </div>
    </div>
  )
}
