import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import AppLogo from './AppLogo'

const HEADER_HEIGHT = 80

const StyledScreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: ${({ theme }) => theme.color.background.lightSecondary};
  flex: 1 1 auto;
`

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.background.lightSecondary};
  box-shadow: 0 3px 10px
    ${({ theme }) => rgba(theme.color.background.lightSecondary, 0.23)};
  padding: 0 20px;
  height: ${HEADER_HEIGHT}px;
`

const StyledContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  padding-top: ${HEADER_HEIGHT}px;
`

interface Props {
  children: ReactNode
}

const DefaultScreenContainer = ({ children }: Props) => {
  return (
    <StyledScreenContainer>
      <StyledHeader>
        <AppLogo />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledScreenContainer>
  )
}

export default DefaultScreenContainer
