import React, { memo } from 'react'
import { useTheme } from 'styled-components'

const Plus = memo(() => {
  const theme = useTheme()

  return (
    <svg width="18.21" height="18.21" viewBox="0 0 18.21 18.21">
      <path
        d="M16.968,7.45H10.76V1.242A1.242,1.242,0,0,0,9.519,0H8.691A1.242,1.242,0,0,0,7.45,1.242V7.45H1.242A1.242,1.242,0,0,0,0,8.691v.828A1.242,1.242,0,0,0,1.242,10.76H7.45v6.208A1.242,1.242,0,0,0,8.691,18.21h.828a1.242,1.242,0,0,0,1.242-1.242V10.76h6.208A1.242,1.242,0,0,0,18.21,9.519V8.691A1.242,1.242,0,0,0,16.968,7.45Zm0,0"
        fill={theme.color.background.lightPrimary}
      />
    </svg>
  )
})

export default Plus
