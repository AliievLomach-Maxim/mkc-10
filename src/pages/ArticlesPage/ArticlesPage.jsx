import { useEffect, useState } from 'react'
import { getArticles } from '../../api/articles-api'
import ArticleList from '../../components/ArticleList/ArticleList'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        setError(false)
        const data = await getArticles()
        setArticles(data.hits)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [])

  return (
    <div>
      {isLoading && <h1>Loading..</h1>}
      {error && <h1>Oops..</h1>}
      {articles && <ArticleList articles={articles} />}
    </div>
  )
}

export default ArticlesPage
