import { Link } from 'react-router-dom'
import { PropsNumber } from '../../types'
import './Pagination.scss'

export function Pagination(props: PropsNumber) {
	return (
        <div className='pagination'>
            {Array.from({ length: props.totalPages }, (_, i) => (
                <Link
                    key={i}
								to={`/page/${i + 1}`}
								className='link'
                >
                    {i + 1}
                </Link>
            ))}
        </div>)
}
