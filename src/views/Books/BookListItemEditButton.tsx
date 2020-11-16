import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import Span from '../../components/Span'
import Button from '../../components/Button'
import Pencil from '../../components/icons/Pencil'
import { useModal } from '../../components/ModalProvider'
import BookEditModal from '../BookEdit/BookEditModal'
import { BookData } from '../../data/__generated__/BookData'

const StyledBookEditButton = styled(Button)`
  margin-left: 15px;
`

const StyledButtonText = styled(Span)`
  font-size: ${({ theme }) => theme.font.size.smaller};
  font-weight: 700;
  color: ${({ theme }) => theme.color.text.lightPrimary};
`

const StyledPencilIcon = styled.div`
  display: flex;
  padding-left: 15px;
`

const useOnClick = (book: BookData) => {
  const showModal = useModal()

  return useCallback(() => {
    showModal((hideModal) => (
      <BookEditModal book={book} hideModal={hideModal} />
    ))
  }, [book, showModal])
}

interface Props {
  book: BookData
}

const BookListItemEditButton = memo(({ book }: Props) => {
  const onClick = useOnClick(book)

  return (
    <StyledBookEditButton onClick={onClick}>
      <StyledButtonText>edit</StyledButtonText>
      <StyledPencilIcon>
        <Pencil />
      </StyledPencilIcon>
    </StyledBookEditButton>
  )
})

export default BookListItemEditButton
