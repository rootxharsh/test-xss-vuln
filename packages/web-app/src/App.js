import React, { useState } from 'react';
import VulnerableComponent from './VulnerableComponent';
import ContentRenderer from './ContentRenderer';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HTML Content Renderer</h1>
        <div className="card">
          <h2>Live HTML Preview</h2>
          <p>Enter HTML content in the box below to see it rendered live.</p>
          <textarea
            value={userInput}
            onChange={handleChange}
            placeholder="Enter HTML here..."
            style={{ width: '95%', height: '100px', padding: '10px', marginBottom: '10px' }}
          />
          <div className="output-area">
            <h3>Rendered Output:</h3>
            <VulnerableComponent htmlContent={userInput} />
            <ContentRenderer htmlContent={userInput} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
