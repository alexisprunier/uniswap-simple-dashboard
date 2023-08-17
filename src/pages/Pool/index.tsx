import React, { useState, useEffect } from 'react'
import './index.css'
import { useQuery } from '@apollo/react-hooks'
import { POOL_PRICE_QUERY } from 'services/the_graph/queries/pool_price'
import { Link, useParams, useNavigate  } from 'react-router-dom'
import CommandBar from 'components/CommandBar'
import Loading from 'components/Loading'

interface PoolProps {
}

const Pool: React.FC<PoolProps> = ({}) => {
  const navigate = useNavigate();
  const [poolData, setPoolData] = useState(undefined);
  const { id } = useParams();

  const {
    loading, error, data
  } = useQuery(POOL_PRICE_QUERY, {
    variables: {
      pool_id: id
    },
  })

  useEffect(() => {
    setPoolData(data);
  }, [data]);

  const buildDataContent = () => {
    if (!poolData) {
      return <Loading />
    }

    return <table>
      {poolData.poolHourDatas.map((p) => (
        <tr>
          <td>{p.periodStartUnix}</td>
          <td>{p.token0Price}</td>
          <td>{p.token1Price}</td>
        </tr>
      ))}
    </table>;
  }

  return (
    <div className="Pool">
      <CommandBar
        backAction={() => navigate('/')}
      />

      {buildDataContent()}
    </div>
  );
}

export default Pool;
