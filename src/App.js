import React from 'react';
import MainPage from './mainPage/main';
import Modal from 'react-modal';


Modal.setAppElement('#root');
function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
