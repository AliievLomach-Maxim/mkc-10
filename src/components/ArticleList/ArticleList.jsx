const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map((el) => (
        <li key={el.objectID}>
          <a href={el.url}>{el.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
