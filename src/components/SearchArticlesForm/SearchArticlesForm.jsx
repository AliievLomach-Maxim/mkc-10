import { Field, Form, Formik } from 'formik'

const SearchArticlesForm = ({ onSearch }) => {
  const handleSearch = (value) => {
    onSearch(value.searchQuery)
  }
  return (
    <Formik
      initialValues={{
        searchQuery: '',
      }}
      onSubmit={handleSearch}
    >
      <Form>
        <Field type='text' name='searchQuery' />
        <button type='submit'>Search</button>
      </Form>
    </Formik>
  )
}

export default SearchArticlesForm
