import React from 'react';
import Header from './components/Header';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Restaurants />
      </div>
    </div>
  );
}

export default App;
