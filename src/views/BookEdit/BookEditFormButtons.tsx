import React, { memo } from 'react'
import styled from 'styled-components'
import SubmitButton from '../../components/SubmitButton'
import CancelButton from '../../components/CancelButton'
import { mediaQuery } from '../../ui/AppThemeProvider'

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mediaQuery.small} {
    padding-top: 20px;
  }
`

const StyledSubmitButton = styled(SubmitButton)`
  margin-left: 30px;
`

interface Props {
  saveButtonLabel: string
  onCancelClick: (e: React.MouseEvent) => void
  submitting: boolean
  pristine: boolean
}

const BookEditFormButtons = memo(
  ({ saveButtonLabel, onCancelClick, submitting, pristine }: Props) => {
    return (
      <StyledButtons>
        <CancelButton onClick={onCancelClick}>Cancel</CancelButton>
        <StyledSubmitButton disabled={submitting || pristine}>
          {saveButtonLabel}
        </StyledSubmitButton>
      </StyledButtons>
    )
  },
)

export default BookEditFormButtons
