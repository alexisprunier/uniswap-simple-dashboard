import React from 'react';
import './App.css';
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
import Main from 'pages/Main';
import Token from 'pages/Token';
import Pool from 'pages/Pool';

interface AppProps {
}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="token/:id" element={<Token />} />
          <Route path="pool/:id" element={<Pool />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
