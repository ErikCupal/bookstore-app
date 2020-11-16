import React, { memo, useMemo } from 'react'
import styled from 'styled-components'
import { ascend, isEmpty, sortWith } from 'ramda'
import BookListItem from './BookListItem'
import { SelectedBookIds } from '../../hooks/useSelectedBookIds'
import { mediaQuery } from '../../ui/AppThemeProvider'
import BookListEmpty from './BookListEmpty'
import { BookData } from '../../data/__generated__/BookData'

const StyledBookList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  padding: 5px 20px 160px;

  ${mediaQuery.small} {
    padding: 5px 10px 160px;
  }
`

const useSortedBooks = (books: BookData[]) => {
  return useMemo(() => {
    return sortWith([ascend((book) => book.title)], books)
  }, [books])
}

interface Props {
  books: BookData[]
  selectedBookIds: SelectedBookIds
  toggleBook: (bookId: number) => void
}

const BookList = memo(({ books, selectedBookIds, toggleBook }: Props) => {
  const sortedBooks = useSortedBooks(books)

  if (isEmpty(sortedBooks)) {
    return <BookListEmpty />
  }

  return (
    <StyledBookList>
      {sortedBooks.map((book) => {
        const { id } = book
        const isSelected = !!selectedBookIds[id]

        return (
          <BookListItem
            key={id}
            book={book}
            isSelected={isSelected}
            toggleBook={toggleBook}
          />
        )
      })}
    </StyledBookList>
  )
})

export default BookList
