import React, { memo } from 'react'
import styled from 'styled-components'
import { useField } from 'react-final-form'
import LabeledField from '../../components/LabeledField'
import Input from '../../components/Input'

const StyledField = styled.div`
  display: flex;
`

const BookEditFormFieldTitle = memo(() => {
  const { input } = useField('title')

  return (
    <StyledField>
      <LabeledField label="Title">
        <Input {...input} required />
      </LabeledField>
    </StyledField>
  )
})

export default BookEditFormFieldTitle
