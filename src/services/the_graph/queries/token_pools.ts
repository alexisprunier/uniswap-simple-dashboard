import gql from 'graphql-tag'

export const TOKEN_POOLS_QUERY = gql`
  query TokenPools {
    pools(
      first: 1000,
      orderBy: volumeUSD,
      where:
        { 
          or:
            [
              { token0: "0x956f47f50a910163d8bf957cf5846d573e7f87ca" },
              { token1: "0x956f47f50a910163d8bf957cf5846d573e7f87ca" }
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
