import { useEffect, useState } from 'react'
import ArticleList from '../ArticleList/ArticleList'
import { getArticles } from '../../api/articles-api'
import SearchArticlesForm from '../SearchArticlesForm/SearchArticlesForm'
import toast from 'react-hot-toast'

const App = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue === '') return

    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        const data = await getArticles(searchValue, page)
        // setArticles([...articles, ...data.hits])
        // setArticles((prevState) => {
        //   return [...prevState, ...data.hits]
        // })
        setArticles((prevState) => [...prevState, ...data.hits])
        toast.success('Articles done...')
      } catch {
        setError(true)
        toast.error('Oops.. Something wrong.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles()
  }, [searchValue, page])

  const handleSearch = async (searchQuery) => {
    setSearchValue(searchQuery)
    setPage(1)
    setArticles([])
  }

  const handleLoadMore = async () => {
    setPage(page + 1)
  }

  return (
    <div>
      {error && <h2>Oops.. Something wrong. Pls reload page.</h2>}
      <SearchArticlesForm onSearch={handleSearch} />
      <hr />
      {articles.length === 0 && isLoading && <h2>Loading..</h2>}
      {articles.length > 0 && <ArticleList articles={articles} />}
      {/* {isLoading && <h2>Loading..</h2>}
      {articles.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more..</button>} */}
      {articles.length > 0 && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          {isLoading ? 'Loading..' : 'Load more..'}
        </button>
      )}
    </div>
  )
}

export default App
