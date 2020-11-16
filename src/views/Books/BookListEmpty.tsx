import React, { memo } from 'react'
import styled from 'styled-components'
import Span from '../../components/Span'
import BookListEmptyCreateButton from './BookListEmptyCreateButton'

const StyledEmptyBookList = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`

const StyledText = styled(Span)`
  color: ${({ theme }) => theme.color.text.lightSecondary};
  font-size: ${({ theme }) => theme.font.size.bigger};
  padding-bottom: 35px;
`

const BookListEmpty = memo(() => {
  return (
    <StyledEmptyBookList>
      <StyledText>There is no book in the bookstore yet.</StyledText>
      <BookListEmptyCreateButton />
    </StyledEmptyBookList>
  )
})

export default BookListEmpty
