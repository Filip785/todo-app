import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Enter your task..." />
      <h1>2 Todos</h1>

      <div className="tasks">
        <div className="task">
          <h1>Do something</h1>
          <div className="icons">
            <div className="done"></div>
            <div className="remove"></div>
          </div>
        </div>

        <div className="task">
          <h1>Do something else</h1>
          <div className="icons">
            <div className="done"></div>
            <div className="remove"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
