import { useEffect, useState } from 'react'
import { getSingleArticle } from '../../api/articles-api'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const ArticlesDetailsPage = () => {
  const [article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const { articleId } = useParams()

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        setError(false)
        const data = await getSingleArticle(articleId)
        setArticle(data)
      } catch {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [articleId])

  return (
    <div>
      ArticlesDetailsPage
      {isLoading && <h1>Loading..</h1>}
      {error && <h1>Oops..Article not found</h1>}
      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>Author: {article.author}</p>
          <a href={article.url}>Link to article url</a>
          <p>Points: {article.points}</p>
        </div>
      )}
      <hr />
      <hr />
      <NavLink to='children-0'>Children-0</NavLink>
      <br />
      <NavLink to='children-1'>Children-1</NavLink>
      <hr />
      <Outlet />
    </div>
  )
}

export default ArticlesDetailsPage
