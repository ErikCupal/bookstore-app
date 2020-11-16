import React, { useCallback } from 'react'
import styled from 'styled-components'
import ModalContainer from '../../components/ModalContainer'
import ModalContent from '../../components/ModalContent'
import Span from '../../components/Span'
import BookEditForm, { BookEditFormValues } from '../BookEdit/BookEditForm'
import useBookCreateMutation from '../../hooks/useBookCreateMutation'
import parsePrice from '../../utils/parsePrice'

const StyledTitle = styled(Span)`
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: 800;
  cursor: default;
`

const useOnSubmit = (hideModal: () => void) => {
  const [createBook] = useBookCreateMutation()

  return useCallback(
    async (values: BookEditFormValues) => {
      const { title, author, price } = values

      await createBook({
        variables: { title, author, price: parsePrice(price) },
      })

      hideModal()
    },
    [createBook, hideModal],
  )
}

interface Props {
  hideModal: () => void
}

const BookCreateModal = ({ hideModal }: Props) => {
  const onSubmit = useOnSubmit(hideModal)

  return (
    <ModalContainer onClick={hideModal}>
      <ModalContent>
        <StyledTitle>New book</StyledTitle>
        <BookEditForm
          hideModal={hideModal}
          onSubmit={onSubmit}
          saveButtonLabel="Create book"
        />
      </ModalContent>
    </ModalContainer>
  )
}

export default BookCreateModal
