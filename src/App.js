import './App.css';
import Title from "./components/Title"
import PasswordGenerator from './components/PasswordGenerator';
import PasswordCards from './components/PasswordCards';
import { useState, useEffect } from 'react';

function App() {
  let [passwordList, setPasswordList] = useState([])

  const onClickSave = (password) => {

    setPasswordList([...passwordList, password]);

  }

  return (
    <div className="App">
      <Title />
      <PasswordGenerator onClickSave={onClickSave} />
      <h1>Generated Passwords:</h1>
      <PasswordCards passwordList={passwordList} />
    </div>
  );
}

export default App;
