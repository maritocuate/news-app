import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useAPI } from '../../context/apiContext'

const Home = () => {
  const { categories, isLoading } = useAPI()

  return (
    <>
        <h2>Categories to show</h2>
        <div>
            {
                !isLoading
                  ? (
                        <Row xs={2} md={3} className="g-4">
                            {categories.map((item, i) => (
                                <Col key={i}>
                                <Card>
                                    <Card.Img variant="top" src={`./images/Thumbnail_channel_${item}.png`} />
                                    <Card.Body>
                                        <Card.Title>{ item }</Card.Title>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))}
                        </Row>
                    )
                  : <p>Loading...</p>
            }
        </div>
    </>
  )
}

export default Home
