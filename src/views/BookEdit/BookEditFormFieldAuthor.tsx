import React, { memo } from 'react'
import styled from 'styled-components'
import { useField } from 'react-final-form'
import LabeledField from '../../components/LabeledField'
import Input from '../../components/Input'

const StyledField = styled.div`
  display: flex;
`

const BookEditFormFieldAuthor = memo(() => {
  const { input } = useField('author')

  return (
    <StyledField>
      <LabeledField label="Author">
        <Input {...input} required />
      </LabeledField>
    </StyledField>
  )
})

export default BookEditFormFieldAuthor
