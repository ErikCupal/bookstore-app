import { useQuery } from '@apollo/client'

import { GET_BOOK_LIST } from '../data/queries'
import { BookList } from '../data/__generated__/BookList'

const useBookList = () => {
  return useQuery<BookList>(GET_BOOK_LIST)
}

export default useBookList
