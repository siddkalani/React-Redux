import React from 'react'
import Header from './components/Header';
import DisplayCounter from './components/DisplayCounter';
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import PrivateMessage from './components/PrivateMessage';

function App() {
  const { privacyState } = useSelector((store) => store.privacy)
  return (
    <div className="App">
      <Header />
      {privacyState ? <PrivateMessage /> : <DisplayCounter />}
      <Controls />
    </div>
  );
}

export default App;
