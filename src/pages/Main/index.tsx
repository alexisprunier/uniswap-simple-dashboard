import React, { useState, useEffect } from 'react'
import './index.css'
import { useQuery } from '@apollo/react-hooks'
import { TOP_TOKEN_100_QUERY } from 'services/the_graph/queries/top_token_100'
import { Link } from 'react-router-dom'
import CommandBar from 'components/CommandBar'
import Loading from 'components/Loading'

interface MainProps {
}

const Main: React.FC<MainProps> = ({}) => {
  const [topTokens, setTopTokens] = useState(undefined);

  const {
    loading, error, data
  } = useQuery(TOP_TOKEN_100_QUERY)

  useEffect(() => {
    setTopTokens(data);
  }, [data]);

  const buildDataContent = () => {
    if (!topTokens) {
      return <Loading />
    }

    return <table>
      {topTokens.tokens.map((p) => (
        <tr>
          <td>{p.id}</td>
          <td>{p.symbol}</td>
          <td>{p.volumeUSD}</td>
          <td><Link to={"/token/" + p.id}>Go!</Link></td>
        </tr>
      ))}
    </table>;
  }

  return (
    <div className="Main">
      <CommandBar />

      {buildDataContent()}
    </div>
  );
}

export default Main;
