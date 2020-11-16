import React, { ReactElement } from 'react'

import AppLayout from './components/AppLayout'
import ApolloClientProvider from './data/ApolloClientProvider'
import AppThemeProvider from './ui/AppThemeProvider'
import Books from './views/Books/Books'
import ModalProvider from './components/ModalProvider'

const App = (): ReactElement => {
  return (
    <ApolloClientProvider>
      <AppThemeProvider>
        <ModalProvider>
          <AppLayout>
            <Books />
          </AppLayout>
        </ModalProvider>
      </AppThemeProvider>
    </ApolloClientProvider>
  )
}

export default App
