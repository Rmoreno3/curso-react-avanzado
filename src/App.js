/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/index'
import { GlobalStyle } from './Styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards />
          </>
      }
    </div>
  )
}
