import { Link, useLocation } from 'react-router-dom'

const ArticleList = ({ articles }) => {
  const articleListLocation = useLocation()
  return (
    <ul style={{ textAlign: 'left' }}>
      {articles.map((el) => (
        <li key={el.objectID}>
          {/* <a href={el.url}>{el.title}</a> */}
          <p>{el.title}</p>
          <Link to={`/articles/${el.objectID}`} state={articleListLocation}>
            Go to Details
          </Link>
          <br />
          <br />
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
