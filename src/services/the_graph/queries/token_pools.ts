import gql from 'graphql-tag'

export const TOKEN_POOLS_QUERY = gql`
  query TokenPools($token_id: String) {
    pools (
      first: 1000,
      orderBy: volumeUSD,
      where:
        { 
          or:
            [
              { token0: $token_id },
              { token1: $token_id }
            ]
        }
    ) {
      id
      token0 {
        id
        symbol
      }
      token1 {
        id
        symbol
      }
      volumeUSD
    }
  }
`
