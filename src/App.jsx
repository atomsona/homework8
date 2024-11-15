import React, { useState } from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import Toggle from './components/Toggle/Toggle';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Toggle onClick={toggleTheme} isDarkMode={isDarkMode} />
      <TodoApp />
    </div>
  );
}

export default App;
