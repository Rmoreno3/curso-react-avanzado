/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { Home } from './pages/Home'

export const App = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <>
              // eslint-disable-next-line react/jsx-indent
              <PhotoCardWithQuery id={detailId} />
            </>)
            // eslint-disable-next-line indent
            : (
              <BrowserRouter>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/pet/:id' element={<Home />} />
                </Routes>
              </BrowserRouter>
            )
      }
    </>
  )
}
