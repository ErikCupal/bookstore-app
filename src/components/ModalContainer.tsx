import styled from 'styled-components'
import { rgba } from 'polished'
import { mediaQuery } from '../ui/AppThemeProvider'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => rgba(theme.color.shadow.darkPrimary, 0.62)};
  z-index: 2;
  padding: 40px 30px;

  ${mediaQuery.small} {
    padding: 0;
  }
`

export default ModalContainer
