import { Route, Routes } from 'react-router-dom'
// import HomePage from '../../pages/HomePage/HomePage'
// import ProfilePage from '../../pages/ProfilePage/ProfilePage'
// import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
// import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage'
// import ArticlesDetailsPage from '../../pages/ArticlesDetailsPage/ArticlesDetailsPage'
// import HomeLayout from '../../layouts/HomeLayout/HomeLayout'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const HomeLayout = lazy(() => import('../../layouts/HomeLayout/HomeLayout'))
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))
const ArticlesPage = lazy(() => import('../../pages/ArticlesPage/ArticlesPage'))
const ArticlesDetailsPage = lazy(
  () => import('../../pages/ArticlesDetailsPage/ArticlesDetailsPage'),
)

const App = () => {
  return (
    <div>
      <Suspense fallback={<h1>.......Loading.......</h1>}>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/articles' element={<ArticlesPage />} />
            <Route path='/articles/:articleId' element={<ArticlesDetailsPage />}>
              <Route path='children-0' element={<div>children-0-details</div>} />
              <Route path='children-1' element={<div>children-1-details</div>} />
            </Route>
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App

// import React from 'react'

// const FlexWrapper = ({children}) => {
//   return (
//     <div style={{display:'flex'}}>{children}</div>
//   )
// }

// export default

// <FlexWrapper>
//   asdasd
// </FlexWrapper>
