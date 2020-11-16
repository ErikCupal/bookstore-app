import React, { memo } from 'react'
import { useTheme } from 'styled-components'

const Pencil = memo(() => {
  const theme = useTheme()

  return (
    <svg width="11.32" height="11.349" viewBox="0 0 11.32 11.349">
      <g transform="translate(1.61 1.597)">
        <rect
          width="7.523"
          height="3.975"
          transform="translate(0 5.32) rotate(-45)"
          fill={theme.color.background.lightPrimary}
        />
      </g>
      <g transform="translate(7.44 0)">
        <path
          d="M262.99,2.262,260.914.157a.511.511,0,0,0-.721-.015l-.015.015-.913.913L262.077,3.9l.913-.913A.5.5,0,0,0,262.99,2.262Z"
          transform="translate(-259.265 0)"
          fill={theme.color.background.lightPrimary}
        />
      </g>
      <g transform="translate(0 7.532)">
        <path
          d="M1.711,261.954.547,265.075a.511.511,0,0,0,.294.663.528.528,0,0,0,.368,0l3.121-1.178Z"
          transform="translate(-0.513 -261.954)"
          fill={theme.color.background.lightPrimary}
        />
      </g>
    </svg>
  )
})

export default Pencil
