import React, { useState, useEffect } from 'react'
import './index.css'
import { useQuery } from '@apollo/react-hooks'
import { DAI_QUERY } from 'services/the_graph/queries/dai'

interface MainProps {
}

const Main: React.FC<MainProps> = ({}) => {
  const [daiData, setDaiData] = useState();

  const {
    loading, error, data
  } = useQuery(DAI_QUERY, {
    variables: {
      tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
  })

  useEffect(() => {
    setDaiData(data);
    console.log(loading, error, data);
  }, [data]);

  useEffect(() => {
    console.log(loading, error, data);
  }, [error]);

  const buildDataContent = () => {
    return daiData ? JSON.stringify(daiData) : "No data";
  }

  return (
    <div className="Main">
      <p>
        {buildDataContent()}
      </p>
    </div>
  );
}

export default Main;
