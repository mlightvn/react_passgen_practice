import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'
import PasswordList from "./Components/PasswordList";
import PasswordForm from "./Components/PasswordForm";

function App() {
  const [passwords, setPassword] = useState([])
  const passwordRef = useRef()

  function handleAddPassword(e) {
    const value = passwordRef.current.value
    if (value === '') return

    setPassword(originalPasswords => {
      return [...originalPasswords, { id: uuidv4(), value: value}]
    })

    passwordRef.current.value = ""
  }

  return (
    <>
      <header>
        <nav className="nav">
          <h1 className="container"><center>PASSWORD GENERATION</center></h1>
        </nav>
      </header>
      <main className="App">
        <div className="container">
          <div className="card">
            <div className="card-header">Password List
            </div>
            <div className="card-body">
              <PasswordList passwords={passwords} />
            </div>
            <div className="card-footer">
              <PasswordForm passwords={passwords} passwordRef={passwordRef} handleAddPassword={handleAddPassword} />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          Author: Nguyen Ngoc Nam
        </div>
      </footer>
    </>
  );
}

export default App;
