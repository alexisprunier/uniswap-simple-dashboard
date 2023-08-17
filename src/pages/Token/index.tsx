import React, { useState, useEffect } from 'react'
import './index.css'
import { useQuery } from '@apollo/react-hooks'
import { TOKEN_POOLS_QUERY } from 'services/the_graph/queries/token_pools'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import CommandBar from 'components/CommandBar'
import Loading from 'components/Loading'

interface TokenProps {
}

const Token: React.FC<TokenProps> = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pools, setPools] = useState(undefined);

  const {
    loading, error, data
  } = useQuery(TOKEN_POOLS_QUERY, {
    variables: {
      token_id: id
    },
  })

  useEffect(() => {
    setPools(data);
  }, [data]);

  const buildDataContent = () => {
    if (!pools) {
      return <Loading />
    }

    return <table>
      {pools.pools.map((p) => (
        <tr>
          <td>{p.id}</td>
          <td>{p.token0.symbol}</td>
          <td>{p.token1.symbol}</td>
          <td><Link to={"/pool/" + p.id}>Go!</Link></td>
        </tr>
      ))}
    </table>;
  }

  return (
    <div className="Token">
      <CommandBar 
        backAction={() => navigate('/')}
      />

      {buildDataContent()}
    </div>
  );
}

export default Token;
