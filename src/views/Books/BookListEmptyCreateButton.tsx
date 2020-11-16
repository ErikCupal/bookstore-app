import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import { useModal } from '../../components/ModalProvider'
import BookCreateModal from '../BookCreate/BookCreateModal'

const StyledCreateBookButton = styled(Button)`
  font-weight: 800;
  padding: 13px 25px;
`

const useOnClick = () => {
  const showModal = useModal()

  return useCallback(() => {
    showModal((hideModal) => <BookCreateModal hideModal={hideModal} />)
  }, [showModal])
}

const BookListEmptyCreateButton = memo(() => {
  const onClick = useOnClick()

  return (
    <StyledCreateBookButton onClick={onClick}>
      Create first book
    </StyledCreateBookButton>
  )
})

export default BookListEmptyCreateButton
