import React, { memo } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Span from '../../components/Span'
import BookListItemCheckbox from './BookListItemCheckbox'
import formatCurrency from '../../utils/formatCurrency'
import BookListItemEditButton from './BookListItemEditButton'
import { mediaQuery } from '../../ui/AppThemeProvider'
import { BookData } from '../../data/__generated__/BookData'

const StyledBook = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  background: ${({ theme }) => theme.color.background.lightPrimary};
  padding: 20px 20px 20px 28px;
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.color.border.darkPrimary : 'transparent'};
  border-radius: 4px;
  box-shadow: 0px 0px 8px
    ${({ theme }) => rgba(theme.color.shadow.darkPrimary, 0.1)};

  &:last-child {
    margin-bottom: 0;
  }

  ${mediaQuery.small} {
    padding: 15px 15px 15px 20px;
  }
`

const StyledSections = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;

  ${mediaQuery.small} {
    flex-direction: column;
    align-items: stretch;
  }
`

const StyledSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const StyledTitle = styled(Span)`
  font-weight: 700;
  cursor: default;
`

const StyledAuthor = styled(Span)`
  margin-top: 4px;
  font-size: ${({ theme }) => theme.font.size.smaller};
  color: ${({ theme }) => theme.color.text.darkSecondary};
  font-weight: 600;
  cursor: default;
`

const StyledPrice = styled(Span)`
  flex-shrink: 0;
  font-weight: 700;
  padding-left: 20px;
  cursor: default;

  ${mediaQuery.small} {
    padding: 0;
  }
`

const StyledSectionRight = styled.div`
  display: flex;
  align-items: center;

  ${mediaQuery.small} {
    padding-top: 10px;
    align-items: flex-start;
    justify-content: space-between;
  }
`

interface Props {
  book: BookData
  isSelected: boolean
  toggleBook: (bookId: number) => void
}

const BookListItem = memo(({ book, isSelected, toggleBook }: Props) => {
  const { id, title, author, price } = book
  const formattedPrice = formatCurrency(price)

  return (
    <StyledBook isSelected={isSelected}>
      <BookListItemCheckbox
        bookId={id}
        isSelected={isSelected}
        toggleBook={toggleBook}
      />
      <StyledSections>
        <StyledSectionLeft>
          <StyledTitle>{title}</StyledTitle>
          <StyledAuthor>{author}</StyledAuthor>
        </StyledSectionLeft>
        <StyledSectionRight>
          <StyledPrice>{formattedPrice}</StyledPrice>
          <BookListItemEditButton book={book} />
        </StyledSectionRight>
      </StyledSections>
    </StyledBook>
  )
})

export default BookListItem
