import React, { ReactNode, useRef } from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../ui/AppThemeProvider'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import stopPropagation from '../utils/stopPropagation'

const StyledModalContent = styled.div`
  padding: 40px 45px;
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.background.lightPrimary};
  border-radius: 4px;

  ${mediaQuery.small} {
    border-radius: 0;
  }
`

interface Props {
  children: ReactNode
}

const ModalContent = ({ children }: Props) => {
  const ref = useRef(null)
  useBodyScrollLock(ref)

  return (
    <StyledModalContent ref={ref} onClick={stopPropagation}>
      {children}
    </StyledModalContent>
  )
}

export default ModalContent
