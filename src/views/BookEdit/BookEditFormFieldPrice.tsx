import React, { memo } from 'react'
import styled from 'styled-components'
import { useField } from 'react-final-form'
import LabeledField from '../../components/LabeledField'
import Input from '../../components/Input'
import { CURRENCY_UNIT } from '../../constants/currencyUnit'

const StyledField = styled.div`
  display: flex;
`

const StyledInput = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  ${Input} {
    padding-left: 30px;
  }

  &:before {
    content: '${CURRENCY_UNIT}';
    display: flex;
    align-items: center;
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    color: ${({ theme }) => theme.color.text.lightSecondary};
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.smaller};
    line-height: 1.25;
    font-weight: 600;
  }
`

const BookEditFormFieldPrice = memo(() => {
  const { input } = useField('price')

  return (
    <StyledField>
      <LabeledField label="Price">
        <StyledInput>
          <Input {...input} type="number" min={0} step={0.01} required />
        </StyledInput>
      </LabeledField>
    </StyledField>
  )
})

export default BookEditFormFieldPrice
