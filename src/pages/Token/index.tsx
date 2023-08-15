import React, { useState, useEffect } from 'react'
import './index.css'
import { useQuery } from '@apollo/react-hooks'
import { TOKEN_POOLS_QUERY } from 'services/the_graph/queries/token_pools'
import { Link, useParams } from 'react-router-dom'

interface TokenProps {
}

const Token: React.FC<TokenProps> = ({}) => {
  const { id } = useParams();
  const [pools, setPools] = useState(undefined);

  const {
    loading, error, data
  } = useQuery(TOKEN_POOLS_QUERY, {
    variables: {
      token: id
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
          <td><Link to={"/pool/" + p.id}>Go!</Link></td>
        </tr>
      ))}
    </table>;
  }

  return (
    <div className="Token">
      <p>
        {buildDataContent()}
      </p>
    </div>
  );
}

export default Token;
