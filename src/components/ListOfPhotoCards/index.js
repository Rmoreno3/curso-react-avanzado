import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { Loader } from '../Loader/index'
import { withPhotos } from '../hoc/withPhotos'
import { useQuery } from '@apollo/client'

export const ListOfPhotoCards = () => {
  const { data, loading, error } = useQuery(withPhotos)

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
