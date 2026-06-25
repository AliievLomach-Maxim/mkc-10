import axios from 'axios'

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

export const getArticles = async (searchQuery, page) => {
  const { data } = await axios.get(`/search`, {
    params: {
      query: searchQuery,
      hitsPerPage: 20,
      page,
    },
  })
  return data
}

export const getSingleArticle = async (id) => {
  const { data } = await axios.get(`/items/${id}`)
  return data
}
