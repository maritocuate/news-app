import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { useAPI } from '../../context/apiContext'
import CardCategory from '../../components/Home/CardCategory'

const Home = () => {
  const { categories, isLoading } = useAPI()

  return (
    <>
        <h2>Categories to show</h2>
        <div>
            {
                !isLoading
                  ? (
                        <Row xs={1} md={3} className="g-4">
                            {categories.map((item, i) => (
                                <Col key={ i }>
                                    <CardCategory name={ item } />
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
