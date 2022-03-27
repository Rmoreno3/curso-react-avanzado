import React from 'react'
import { Loader } from '../components/Loader'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id)

  if (loading) {
    return <Loader />
  } if (error) {
    return error
  }

  return (
    <>
      <a href='/'>BACK</a>
      <PhotoCard {...data.photo} />
    </>
  )
}
