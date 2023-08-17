import gql from 'graphql-tag'

export const POOL_PRICE_QUERY = gql`
  query PoolPrice($pool_id: String) {
    poolHourDatas (
      first: 100
      where: {
        pool: $pool_id
      }
      orderBy: periodStartUnix
      orderDirection: desc
    ) {
      periodStartUnix
      liquidity
      sqrtPrice
      token0Price
      token1Price
      tvlUSD
      volumeToken0
      volumeToken1
      volumeUSD
      open
      high
      low
      close
    }
  }
`
