import { FaEye, FaRssSquare } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './styles.scss'

const CardArticle = ({ data }) => {
  const { title, category, views, thumbnailUrl, createdAt } = data

  const capitalizeFirstLetter = text => {
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1)
    return formattedText
  }

  const setFormatDate = date => {
    const format = { year: 'numeric', month: '2-digit', day: '2-digit' }
    return new Intl.DateTimeFormat('en-US', format).format(new Date(date))
  }

  return (
    <Card>
        <Card.Img variant="top" src={ thumbnailUrl } />
        <Card.Body>
            <Card.Title
              className='article__title'
            >{ capitalizeFirstLetter(title) }</Card.Title>
            <span className='d-lg-flex justify-content-between align-items-center'>
              <Card.Text className="m-0">
                <FaRssSquare />
                { capitalizeFirstLetter(category) }
              </Card.Text>
              <Card.Text><FaEye /> { views }</Card.Text>
            </span>
        </Card.Body>
        <Card.Footer
          className='d-lg-flex justify-content-between align-items-center'>
          <small className="text-muted">
            { setFormatDate(createdAt) }
          </small>
          <Button variant="primary" size="sm">Read More</Button>
        </Card.Footer>
    </Card>
  )
}

export default CardArticle
