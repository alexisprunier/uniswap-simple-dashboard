import gql from 'graphql-tag'

export const TOP_TOKEN_100_QUERY = gql`
  query TopTokens100 {
    tokens(first: 100, orderBy: volumeUSD, orderDirection: desc) {
      id
      symbol
      volumeUSD
    }
  }
`
