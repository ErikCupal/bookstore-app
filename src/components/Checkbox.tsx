import React, { memo, useCallback } from 'react'
import styled, { useTheme } from 'styled-components'

const UncheckedIcon = memo(() => {
  const theme = useTheme()

  return (
    <svg width="26" height="27" viewBox="0 0 26 27">
      <g
        fill={theme.color.background.lightPrimary}
        stroke="#e6e6e6"
        strokeWidth="2">
        <rect x="1" y="1" width="24" height="25" rx="3" fill="none" />
      </g>
    </svg>
  )
})

const CheckedIcon = memo(() => {
  const theme = useTheme()

  return (
    <svg width="26" height="27" viewBox="0 0 26 27">
      <rect
        width="26"
        height="27"
        rx="4"
        fill={theme.color.background.darkPrimary}
      />
      <g transform="translate(4.267 9.275)">
        <g transform="translate(2.035)">
          <path
            d="M13.454,204.482l-7.313,7.312a1.388,1.388,0,0,1-1.962,0L.4,208.019a1.387,1.387,0,0,1,1.962-1.962l2.794,2.794,6.331-6.331a1.387,1.387,0,0,1,1.962,1.962Z"
            transform="translate(0.002 -202.114)"
            fill={theme.color.background.lightPrimary}
          />
        </g>
      </g>
    </svg>
  )
})

const StyledCheckboxContainer = styled.div`
  display: flex;
  cursor: pointer;
`

const useOnClick = (
  isChecked: boolean,
  clickHandler: (isChecked: boolean) => void,
) => {
  return useCallback(() => {
    clickHandler(!isChecked)
  }, [isChecked, clickHandler])
}

interface Props {
  isChecked: boolean
  onClick: (isChecked: boolean) => void
}

const Checkbox = memo(({ isChecked, onClick: clickHandler }: Props) => {
  const onClick = useOnClick(isChecked, clickHandler)

  return (
    <StyledCheckboxContainer onClick={onClick}>
      {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
    </StyledCheckboxContainer>
  )
})

export default Checkbox
