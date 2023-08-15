import React, { useState, useEffect } from 'react'
import './index.css'
import { useQuery } from '@apollo/react-hooks'
import { TOKEN_POOLS_QUERY } from 'services/the_graph/queries/token_pools'
import { Link } from 'react-router-dom'

interface PoolProps {
}

const Pool: React.FC<PoolProps> = ({}) => {
  const [pools, setPools] = useState(undefined);

  const {
    loading, error, data
  } = useQuery(TOKEN_POOLS_QUERY, {
    variables: {
      token: "0x956f47f50a910163d8bf957cf5846d573e7f87ca"
    },
  })

  useEffect(() => {
    setPools(data);
  }, [data]);

  const buildDataContent = () => {
    if (!pools) {
      return "No data"
    }

    return <table>
      {pools.pools.map((p) => (
        <tr>
          <td>{p.token0.symbol}</td>
          <td>{p.token1.symbol}</td>
          <td><Link to="pool">Go!</Link></td>
        </tr>
      ))}
    </table>;
  }

  return (
    <div className="Pool">
      <p>
        {buildDataContent()}
      </p>
    </div>
  );
}

export default Pool;
