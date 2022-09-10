import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Note from '../../components/Article/Note'
import { useAPI } from '../../context/apiContext'

const Article = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  const { getArticleById } = useAPI()

  useEffect(() => {
    if (getArticleById(id).length) {
      setData(getArticleById(id)[0][1])
    }
  }, [getArticleById])

  return (
    <div className='container article-page'>
        {
            Object.keys(data).length
              ? (
                <Note data={data} />
                )
              : (
                <div>Loading...</div>
                )
        }
    </div>
  )
}

export default Article
