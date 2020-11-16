import React, { memo, useCallback } from 'react'
import styled from 'styled-components'
import { Form } from 'react-final-form'
import BookEditFormFieldTitle from './BookEditFormFieldTitle'
import BookEditFormButtons from './BookEditFormButtons'
import BookEditFormFieldAuthor from './BookEditFormFieldAuthor'
import BookEditFormFieldPrice from './BookEditFormFieldPrice'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`

const StyledFields = styled.div`
  display: flex;
  flex-direction: column;
`

export interface BookEditFormValues {
  title: string
  author: string
  price: string
}

const useOnCancelClick = (hideModal: () => void) => {
  return useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      hideModal()
    },
    [hideModal],
  )
}

interface Props {
  onSubmit: (values: BookEditFormValues) => Promise<void>
  hideModal: () => void
  initialValues?: BookEditFormValues
  saveButtonLabel: string
}

const BookEditForm = memo(
  ({ onSubmit, hideModal, initialValues, saveButtonLabel }: Props) => {
    const onCancelClick = useOnCancelClick(hideModal)

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, submitting, pristine }) => {
          return (
            <StyledForm onSubmit={handleSubmit}>
              <StyledFields>
                <BookEditFormFieldTitle />
                <BookEditFormFieldAuthor />
                <BookEditFormFieldPrice />
              </StyledFields>
              <BookEditFormButtons
                saveButtonLabel={saveButtonLabel}
                onCancelClick={onCancelClick}
                submitting={submitting}
                pristine={pristine}
              />
            </StyledForm>
          )
        }}
      />
    )
  },
)

export default BookEditForm
