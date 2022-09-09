import Card from 'react-bootstrap/Card'

const CardCategory = ({ name }) => {
  return (
    <Card>
        <Card.Img variant="top" src={`./images/Thumbnail_channel_${name}.png`} />
        <Card.Body>
            <Card.Title>{ name }</Card.Title>
        </Card.Body>
    </Card>
  )
}

export default CardCategory
