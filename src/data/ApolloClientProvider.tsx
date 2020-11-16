import React, { ReactNode } from 'react'
import { ApolloProvider } from '@apollo/client'

import client from './client'

interface Props {
  children: ReactNode
}

const ApolloClientProvider = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider
