import { gql } from '@apollo/client'

export const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      id: bookId
      title
      author
      price
    }
  }
`

export const UPDATE_BOOK = gql`
  mutation UpdateBook(
    $id: Int!
    $title: String!
    $author: String!
    $price: Float!
  ) {
    editBook(bookId: $id, title: $title, author: $author, price: $price) {
      id: bookId
      title
      author
      price
    }
  }
`
