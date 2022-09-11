import { useState } from 'react'
import { FaEye, FaRssSquare, FaRegCalendarAlt } from 'react-icons/fa'

import './styles.scss'

const Note = ({ data }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const { title, category, createdAt, views, imageUrl, subtitle, body } = data

  return (
    <div className='note'>
        <h2 className='note__title'>{ title }</h2>
        <p className='note__stats'>
            <span><FaRssSquare />{ category }</span>
            <span><FaRegCalendarAlt />{ createdAt }</span>
            <span><FaEye />{ views }</span>
        </p>
        <img
            className={`note__image ${imgLoaded ? 'loaded' : null}`}
            alt={ title }
            src={ imageUrl }
            width="100%"
            onLoad={() => setImgLoaded(true)}
        />
        <h3 className='note__subtitle'>{ subtitle }</h3>
        <p className='note__body'>
            { body }
        </p>
    </div>
  )
}

export default Note
