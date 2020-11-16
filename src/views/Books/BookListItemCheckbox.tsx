import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import Checkbox from '../../components/Checkbox'
import { mediaQuery } from '../../ui/AppThemeProvider'

const StyledCheckbox = styled.div`
  display: flex;
  padding-right: 25px;

  ${mediaQuery.small} {
    padding-right: 20px;
  }
`

const useOnClick = (bookId: number, toggleBook: (bookId: number) => void) => {
  return useCallback(() => {
    toggleBook(bookId)
  }, [bookId, toggleBook])
}

interface Props {
  bookId: number
  isSelected: boolean
  toggleBook: (bookId: number) => void
}

const BookListItemCheckbox = memo(
  ({ bookId, isSelected, toggleBook }: Props) => {
    const onClick = useOnClick(bookId, toggleBook)

    return (
      <StyledCheckbox>
        <Checkbox isChecked={isSelected} onClick={onClick} />
      </StyledCheckbox>
    )
  },
)

export default BookListItemCheckbox
