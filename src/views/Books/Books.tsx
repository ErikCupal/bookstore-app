import React, { memo } from 'react'
import styled from 'styled-components'
import { isEmpty } from 'ramda'
import DefaultScreenContainer from '../../components/DefaultScreenContainer'
import useBookList from '../../hooks/useBookList'
import Span from '../../components/Span'
import BookList from './BookList'
import useSelectedBookIds from '../../hooks/useSelectedBookIds'
import BooksSelection from './BooksSelection'
import BookCreateButton from './BookCreateButton'

const StyledBooksContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLoaderContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const StyledLoaderText = styled(Span)`
  cursor: default;
  font-size: ${({ theme }) => theme.font.size.bigger};
  color: ${({ theme }) => theme.color.text.lightSecondary};
`

const StyledErrorContainer = styled(StyledLoaderContainer)``
const StyledErrorText = styled(StyledLoaderText)``

const Books = memo(() => {
  const { data, loading, error } = useBookList()
  const books = data?.books
  const [selectedBookIds, toggleBook] = useSelectedBookIds()

  return (
    <DefaultScreenContainer>
      <StyledBooksContainer>
        {loading ? (
          <StyledLoaderContainer>
            <StyledLoaderText>Books are loading…</StyledLoaderText>
          </StyledLoaderContainer>
        ) : error || !books ? (
          <StyledErrorContainer>
            <StyledErrorText>
              Couldn't load books. Try reloading the page.
            </StyledErrorText>
          </StyledErrorContainer>
        ) : (
          <>
            <BookList
              books={books}
              selectedBookIds={selectedBookIds}
              toggleBook={toggleBook}
            />
            <BooksSelection books={books} selectedBookIds={selectedBookIds} />
            {!isEmpty(books) && <BookCreateButton />}
          </>
        )}
      </StyledBooksContainer>
    </DefaultScreenContainer>
  )
})

export default Books
