import React, { memo, useMemo } from 'react'
import styled from 'styled-components'
import { filter, isEmpty, map, sum } from 'ramda'
import { rgba } from 'polished'
import { SelectedBookIds } from '../../hooks/useSelectedBookIds'
import Span from '../../components/Span'
import formatCurrency from '../../utils/formatCurrency'
import { BookData } from '../../data/__generated__/BookData'

const StyledBooksSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 25px;
  position: fixed;
  bottom: 65px;
  left: 0;
  right: 0;
  width: 100%;
  background: ${({ theme }) => theme.color.background.lightPrimary};
  box-shadow: 0 -4px 4px ${({ theme }) => rgba(theme.color.shadow.darkPrimary, 0.1)};
  z-index: 2;
`

const StyledBooksCountText = styled(Span)`
  font-weight: 700;
  padding-right: 20px;
  cursor: default;
`

const StyledTotalValueText = styled(Span)`
  cursor: default;
`

const StyledTotalValue = styled(StyledTotalValueText)`
  color: ${({ theme }) => theme.color.text.darkTheme};
`

const useSelectedBooks = (
  books: BookData[],
  selectedBookIds: SelectedBookIds,
) => {
  return useMemo(() => {
    return filter((book) => !!selectedBookIds[book.id], books)
  }, [books, selectedBookIds])
}

const useBooksTotalValue = (books: BookData[]) => {
  return useMemo(() => {
    const bookPricesInCents = map((book) => book.price * 100, books)

    return sum(bookPricesInCents) / 100
  }, [books])
}

interface Props {
  books: BookData[]
  selectedBookIds: SelectedBookIds
}

const BooksSelection = memo(({ books, selectedBookIds }: Props) => {
  const selectedBooks = useSelectedBooks(books, selectedBookIds)
  const count = selectedBooks.length
  const totalValue = useBooksTotalValue(selectedBooks)
  const formattedTotalValue = formatCurrency(totalValue)

  if (isEmpty(selectedBooks)) {
    return null
  }

  return (
    <StyledBooksSelection>
      <StyledBooksCountText>
        {count} book{count > 1 ? 's' : ''} selected
      </StyledBooksCountText>
      <StyledTotalValueText>total price =&nbsp;</StyledTotalValueText>
      <StyledTotalValue>{formattedTotalValue}</StyledTotalValue>
    </StyledBooksSelection>
  )
})

export default BooksSelection
