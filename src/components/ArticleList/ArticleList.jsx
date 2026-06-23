import { Link } from 'react-router-dom'

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map((el) => (
        <li key={el.objectID}>
          <a href={el.url}>{el.title}</a>
          <br />
          <Link to={`/articles/${el.objectID}`}>Go to Details</Link>
          <br />
          <br />
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
