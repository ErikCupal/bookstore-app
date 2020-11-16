import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import cache from './cache'

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri:
    process.env.REACT_APP_SERVICE_ENDPOINT || 'http://localhost:4567/graphql',
})

export default client
