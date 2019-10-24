import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'
import PasswordList from "./Components/PasswordList";
import PasswordForm from "./Components/PasswordForm";

function App() {
  const [passwords, setPassword] = useState([])
  const passwordIdRef = useRef()
  const passwordValueRef = useRef()

  function handleAddPassword(e) {
    let id = passwordIdRef.current.value
    let value = passwordValueRef.current.value
    if (value === '') return

    if (id === ''){
      setPassword(originalPasswords => {
        return [...originalPasswords, { id: uuidv4(), value: value}]
      })
    }else{

      setPassword(originalPasswords => {
        let list = originalPasswords.map(item => {
            if(item.id === id){
              item.value = value
            }
            return item;
          })

        return list
      })

    }

    passwordIdRef.current.value = ''
    passwordValueRef.current.value = ''
  }

  function handleEditPassword(id) {
    const list = [...passwords]
    const password = list.find(password => password.id === id)

    passwordIdRef.current.value = password.id
    passwordValueRef.current.value = password.value
  }

  function handleRemovePassword(id) {
    const newPasswords = passwords.filter(password => password.id !== id)
    setPassword(newPasswords)
  }

  function handleGeneratePassword() {
    // https://www.npmjs.com/package/generate-password
    var generator = require('generate-password');
    var password = generator.generate({
        length: 12,
        numbers: true,
        uppercase: true,
        symbols: true,
    });

    passwordValueRef.current.value = password
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
              <PasswordList passwords={passwords} handleRemovePassword={handleRemovePassword} handleEditPassword={handleEditPassword} />
            </div>
            <div className="card-footer">
              <PasswordForm passwords={passwords} passwordValueRef={passwordValueRef} passwordIdRef={passwordIdRef} handleAddPassword={handleAddPassword} handleGeneratePassword={handleGeneratePassword} />
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
