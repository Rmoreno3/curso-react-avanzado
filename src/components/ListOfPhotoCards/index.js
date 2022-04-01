import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import { Loader } from '../Loader/index'
import { withPhotos } from '../hoc/withPhotos'
import { useQuery } from '@apollo/client'
// import { useParams } from 'react-router-dom'

export const ListOfPhotoCards = ({ categoryId }) => {
  // const { id } = useParams()
  // console.log(id)
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
