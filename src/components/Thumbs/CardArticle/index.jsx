import Card from 'react-bootstrap/Card'
import './styles.scss'

const CardArticle = ({ data }) => {
  const { title, category, views, thumbnailUrl, createdAt } = data

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
            >{ title }</Card.Title>
            <span className='d-sm-flex justify-content-between'>
              <Card.Text>{ category }</Card.Text>
              <Card.Text>{ views }</Card.Text>
            </span>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            { setFormatDate(createdAt) }
          </small>
        </Card.Footer>
    </Card>
  )
}

export default CardArticle
