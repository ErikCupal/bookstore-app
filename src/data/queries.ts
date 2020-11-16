import { gql } from '@apollo/client'

export const BOOK_DATA = gql`
  fragment BookData on Book {
    id: bookId
    title
    author
    price
  }
`

export const GET_BOOK_LIST = gql`
  query BookList {
    books {
      ...BookData
    }
  }
  ${BOOK_DATA}
`
