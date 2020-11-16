import { useCallback, useState } from 'react'
import { assoc } from 'ramda'

export type SelectedBookIds = Record<number, boolean | undefined>

const useSelectedBookIds = () => {
  const [selectedBookIds, setSelectedBooks] = useState({} as SelectedBookIds)

  const toggleBook = useCallback(
    (bookId: number) => {
      setSelectedBooks((selectedBooks) => {
        return assoc(String(bookId), !selectedBooks[bookId], selectedBooks)
      })
    },
    [setSelectedBooks],
  )

  return [selectedBookIds, toggleBook] as const
}

export default useSelectedBookIds
