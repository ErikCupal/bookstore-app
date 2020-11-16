import { useMutation } from '@apollo/client'
import { CREATE_BOOK } from '../data/mutations'
import {
  CreateBook,
  CreateBookVariables,
} from '../data/__generated__/CreateBook'
import { BOOK_DATA } from '../data/queries'
import { BookData } from '../data/__generated__/BookData'

const useBookCreateMutation = () => {
  return useMutation<CreateBook, CreateBookVariables>(CREATE_BOOK, {
    update: (cache, { data }) => {
      if (!data) {
        return
      }

      const { createBook } = data

      cache.modify({
        fields: {
          books: (existingBooks: BookData[]) => {
            return [
              ...existingBooks,
              cache.writeFragment({
                data: createBook,
                fragment: BOOK_DATA,
              }),
            ]
          },
        },
      })
    },
  })
}

export default useBookCreateMutation
