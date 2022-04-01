import { gql, useQuery } from '@apollo/client'

export const useGetPhotoWithQuery = categoryId => {
  const GET_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTO, { variables: { categoryId } })

  return { loading, error, data }
}
