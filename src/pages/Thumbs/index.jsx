import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CardArticle from '../../components/Thumbs/CardArticle'
import ReactPaginate from 'react-paginate'
import { useParams } from 'react-router-dom'

import './styles.scss'
import { useAPI } from '../../context/apiContext'

const Thumbs = ({ type }) => {
  const { recentNews, topRatedNews, byCategory, isLoading } = useAPI()
  const [articles, setArticles] = useState([])
  const [titlePage, setTitlePage] = useState('')

  // Paginate States
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 8

  const { id } = useParams()

  useEffect(() => {
    if (type === 'recent') {
      setArticles(recentNews())
      setTitlePage('Recent News')
    } else if (type === 'rated') {
      setArticles(topRatedNews())
      setTitlePage('Top Rated News')
    } else {
      setArticles(byCategory(id))
      setTitlePage(`Category: ${id}`)
    }

    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(articles.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(articles.length / itemsPerPage))
  }, [type, titlePage, byCategory, itemOffset])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length
    setItemOffset(newOffset)
  }

  return (
    <>
        <h2 className='m-4'>{ titlePage }</h2>
        <div>
            {
                !isLoading
                  ? (
                    <>
                        <Row xs={2} md={4} className="g-4">
                            {currentItems.map((item, i) => (
                                <Col key={ i }>
                                    <CardArticle id={item[0]} data={item[1]} />
                                </Col>
                            ))}
                        </Row>
                        <ReactPaginate
                            className='pagination nav-pagination'
                            marginPagesDisplayed={1}
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="< previous"

                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link bg-light'}
                            containerClassName={'pagination'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link bg-light'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link bg-light'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link bg-light'}
                            activeClassName={'text-primary'}
                            disabledClassName={'text-dark'}
                        />

                    </>
                    )
                  : <p>Loading...</p>
            }
        </div>
    </>
  )
}

export default Thumbs
