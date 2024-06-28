import React from 'react';
import Header from './components/Header';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background />
      <div className="content">
        <Header />
        {/* 다른 콘텐츠가 여기 들어갈 수 있습니다 */}
      </div>
    </div>
  );
}

export default App;
