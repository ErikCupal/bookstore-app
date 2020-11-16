import React, { memo, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import ModalContainer from '../../components/ModalContainer'
import ModalContent from '../../components/ModalContent'
import Span from '../../components/Span'
import BookEditForm, { BookEditFormValues } from './BookEditForm'
import parsePrice from '../../utils/parsePrice'
import useBookUpdateMutation from '../../hooks/useBookUpdateMutation'
import { BookData } from '../../data/__generated__/BookData'

const StyledTitle = styled(Span)`
  font-size: ${({ theme }) => theme.font.size.big};
  font-weight: 800;
  cursor: default;
`

const useOnSubmit = (id: number, hideModal: () => void) => {
  const [updateBook] = useBookUpdateMutation()

  return useCallback(
    async (values: BookEditFormValues) => {
      const { title, author, price } = values

      await updateBook({
        variables: { id, title, author, price: parsePrice(price) },
      })

      hideModal()
    },
    [updateBook, hideModal, id],
  )
}

const useInitialValues = (book: BookData): BookEditFormValues => {
  const { title, author, price } = book

  return useMemo(
    () => ({
      title,
      author,
      price: price.toFixed(2),
    }),
    [title, author, price],
  )
}

interface Props {
  book: BookData
  hideModal: () => void
}

const BookEditModal = memo(({ book, hideModal }: Props) => {
  const { id } = book
  const onSubmit = useOnSubmit(id, hideModal)
  const initialValues = useInitialValues(book)

  return (
    <ModalContainer onClick={hideModal}>
      <ModalContent>
        <StyledTitle>Edit book</StyledTitle>
        <BookEditForm
          hideModal={hideModal}
          onSubmit={onSubmit}
          saveButtonLabel="Save book"
          initialValues={initialValues}
        />
      </ModalContent>
    </ModalContainer>
  )
})

export default BookEditModal
