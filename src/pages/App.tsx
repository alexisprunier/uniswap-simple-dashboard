import React from 'react';
import './App.css';
import Main from 'pages/Main';

interface AppProps {
}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
