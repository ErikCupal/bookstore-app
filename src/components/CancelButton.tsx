import styled from 'styled-components'
import Button from './Button'

const CancelButton = styled(Button)`
  background: none;
  color: ${({ theme }) => theme.color.text.lightSecondary};
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.text.lightSecondary};
  border-radius: 0;

  &:hover {
    background: none;
  }
`

export default CancelButton
