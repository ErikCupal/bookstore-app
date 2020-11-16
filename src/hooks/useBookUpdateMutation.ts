import { useMutation } from '@apollo/client'
import { UPDATE_BOOK } from '../data/mutations'

import {
  UpdateBook,
  UpdateBookVariables,
} from '../data/__generated__/UpdateBook'

const useBookUpdateMutation = () => {
  return useMutation<UpdateBook, UpdateBookVariables>(UPDATE_BOOK)
}

export default useBookUpdateMutation
