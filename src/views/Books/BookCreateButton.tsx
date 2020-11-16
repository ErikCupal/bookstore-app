import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Span from '../../components/Span'
import Button from '../../components/Button'
import Plus from '../../components/icons/Plus'
import { useModal } from '../../components/ModalProvider'
import BookCreateModal from '../BookCreate/BookCreateModal'

const StyledBookCreateButton = styled(Button)`
  height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  border-radius: 0;
  box-shadow: 0 0 6px
    ${({ theme }) => rgba(theme.color.shadow.darkPrimary, 0.26)};
`

const StyledButtonText = styled(Span)`
  font-size: ${({ theme }) => theme.font.size.bigger};
  font-weight: 700;
  color: ${({ theme }) => theme.color.text.lightPrimary};
`

const StyledPlusIcon = styled.div`
  display: flex;
  padding-left: 15px;
`

const useOnClick = () => {
  const showModal = useModal()

  return useCallback(() => {
    showModal((hideModal) => <BookCreateModal hideModal={hideModal} />)
  }, [showModal])
}

const BookCreateButton = memo(() => {
  const onClick = useOnClick()

  return (
    <StyledBookCreateButton onClick={onClick}>
      <StyledButtonText>Create new book</StyledButtonText>
      <StyledPlusIcon>
        <Plus />
      </StyledPlusIcon>
    </StyledBookCreateButton>
  )
})

export default BookCreateButton
