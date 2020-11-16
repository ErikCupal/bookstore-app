import React, { ReactNode } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

enum Colors {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  DARK_GREY = '#0D0D0D',
  GREY = '#434343',
  LIGHTER_GREY = '#989898',
  LIGHT_GREY = '#E8E8E8',
  LIGHTEST_GREY = '#F4F4F4',
  VIOLET = '#5E46A2',
}

const appTheme = {
  color: {
    text: {
      lightPrimary: Colors.WHITE,
      lightSecondary: Colors.LIGHTER_GREY,
      darkPrimary: Colors.DARK_GREY,
      darkSecondary: Colors.GREY,
      darkTheme: Colors.VIOLET,
    },
    background: {
      lightPrimary: Colors.WHITE,
      lightSecondary: Colors.LIGHTEST_GREY,
      lightTertiary: Colors.LIGHT_GREY,
      darkPrimary: Colors.VIOLET,
      darkSecondary: Colors.GREY,
    },
    border: {
      darkPrimary: Colors.VIOLET,
    },
    shadow: {
      darkPrimary: Colors.BLACK,
    },
  },
  font: {
    size: {
      big: '20px',
      bigger: '17px',
      normal: '15px',
      smaller: '13px',
      small: '12px',
    },
    family: {
      primary: `'Nunito Sans', sans serif`,
    },
  },
  mediaQueries: {
    small: '@media (max-width: 599px)',
    medium: '@media (max-width: 999px) and (min-width: 600px)',
    large: '@media (min-width: 1000px)',
  },
}

export type AppTheme = typeof appTheme

export const mediaQuery: Record<
  keyof AppTheme['mediaQueries'],
  (props: { theme: AppTheme }) => string
> = {
  small: ({ theme }) => theme.mediaQueries.small,
  medium: ({ theme }) => theme.mediaQueries.medium,
  large: ({ theme }) => theme.mediaQueries.large,
}

const GlobalAppStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background.lightSecondary};
  }
`

interface AppThemeProviderProps {
  children: ReactNode
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalAppStyles />
      {children}
    </ThemeProvider>
  )
}

export default AppThemeProvider
