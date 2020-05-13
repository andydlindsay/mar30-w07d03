import React from 'react';
import './App.css';
import Effect from './components/Effect';
import ClassComponent from './components/Class';

const App = () => {
  return (
    <div className="App">
      <h1>useEffect is fire!</h1>
      <ClassComponent />
      <Effect />
    </div>
  );
};

export default App;
