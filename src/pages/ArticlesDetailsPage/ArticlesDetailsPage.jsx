import { Suspense, useEffect, useState } from 'react'
import { getSingleArticle } from '../../api/articles-api'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ArticlesDetailsPage = () => {
  const lngValue = useSelector((state) => state.lng.value)
  //
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
  //
  const articlesDetailsPageLocation = useLocation()
  const prevLocationState = articlesDetailsPageLocation.state

  return (
    <div>
      ArticlesDetailsPage
      <h1>Current lng: {lngValue}</h1>
      <br />
      {/* <Link to={'/articles'}>Go Back</Link> */}
      <Link to={prevLocationState ?? '/articles'}>Go Back</Link>
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
      <Suspense fallback={<h1>.......Loading.......</h1>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default ArticlesDetailsPage
