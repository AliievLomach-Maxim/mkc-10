import {  Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage'
import ArticlesDetailsPage from '../../pages/ArticlesDetailsPage/ArticlesDetailsPage'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout'

const App = () => {
  return (
    <div>
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
