import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { Loader } from '../Loader/index'
import { useQuery, gql } from '@apollo/client'

const withPhotos = gql`
  query getPhotos {
    photos {
      id
      likes
      userId
      categoryId
      src
      liked
    }
 }
`

export const ListOfPhotoCards = () => {
  const { data, loading, error } = useQuery(withPhotos)
  console.log(data)

  if (error) {
    return error
  } if (loading) {
    return <Loader />
  }

  return (
    <div>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </div>
  )
}
