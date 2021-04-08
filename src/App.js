
import React from 'react';
import Di from './pages/Di';
import Hook from './pages/Hook';
import Count from './pages/Count';
import Ref from './pages/Ref';
import './App.css';

function App() {
  return (
    <div className="App">
      <Di/>
        <Hook/>
        <Count/>
        <Ref/>
    </div>
  );
}

export default App;
