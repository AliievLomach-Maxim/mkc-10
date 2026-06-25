import { useEffect, useState } from 'react'
import { getArticles } from '../../api/articles-api'
import ArticleList from '../../components/ArticleList/ArticleList'
import { useSearchParams } from 'react-router-dom'

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
  //
  //
  //
  // const [searchArticlesValue, setSearchArticlesValue] = useState('')

  // const handleSearch = ({ target: { value } }) => {
  //   setSearchArticlesValue(value)
  // }

  //

  const [searchParams, setSearchParams] = useSearchParams()

  const searchArticlesValue = searchParams.get('articleFilter') ?? ''

  const handleSearch = ({ target: { value } }) => {
    searchParams.set('articleFilter', value)
    setSearchParams(searchParams)
    // pls not use >>
    // setSearchParams({ articleFilter: value })
  }

  //

  const filteredArticles = articles.filter((el) =>
    el?.title?.toLowerCase().includes(searchArticlesValue.toLowerCase()),
  )
  //

  return (
    <div>
      {isLoading && <h1>Loading..</h1>}
      {error && <h1>Oops..</h1>}
      <input type='text' value={searchArticlesValue} onChange={handleSearch} />
      {filteredArticles && <ArticleList articles={filteredArticles} />}
    </div>
  )
}

export default ArticlesPage
