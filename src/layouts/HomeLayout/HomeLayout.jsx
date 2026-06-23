import { Outlet } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'

const HomeLayout = () => {
  return (
    <div>
      <Navigation />
      <aside></aside>
      <hr />
      <Outlet />
      <hr />
      <footer>Footer</footer>
    </div>
  )
}

export default HomeLayout
