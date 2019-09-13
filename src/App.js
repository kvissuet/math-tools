import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import StringReplacementComponent from './tools/string-replacement/StringReplacementComponent.jsx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StringReplacementComponent/>
      </header>
    </div>
  );
}

export default App;
