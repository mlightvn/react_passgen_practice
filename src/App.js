import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";

import PasswordList from "./Components/PasswordList";
import PasswordModal from "./Components/PasswordModal";
import JapaneseModal from "./Components/Ime/JapaneseModal";
import TextModal from "./Components/Text/TextModal";

// import Modal from 'react-bootstrap/Modal'

function App() {
  const [passwords, setPassword, isModalShowed] = useState([])
  const passwordIdRef = useRef()
  const passwordValueRef = useRef()

  const {log} = console


  // constructor(props) {
  //   super(props);

  //   // this.addWorkLog = this.addWorkLog.bind(this);
  //   // this.onOpenModal = this.onOpenModal.bind(this);
  //   // this.onCloseModal = this.onCloseModal.bind(this);
  //   // this.state = {
  //   //      open:true
  //   //    };
  //   this.state.isModalShowed = false

  // }

  function handleAddPassword(e) {
    let id = passwordIdRef.current.value
    let value = passwordValueRef.current.value
    if (value === '') return

    if (id === ''){
      let htpasswd = generateHtpasswd()

      setPassword(originalPasswords => {
        return [...originalPasswords, { id: uuidv4(), value: value, htpasswd: htpasswd}]
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

  function generateHtpasswd() {
    const md5 = require('apache-md5');

    // // Importing crypto module.
    // const crypto = require('crypto');

    // // Importing apache-md5 module.
    // const md5 = require('apache-md5');

    // // Importing apache-crypt module.
    // const crypt = require('apache-crypt');

    // // Bcrypt.
    // const bcrypt = require('bcryptjs');

    let password = passwordValueRef.current.value

    let htpasswd = md5(password)

    return htpasswd;

  }

  return (
    <>
      <Header />

      <main className="App">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-9">
                  Password List
                </div>
                <div className="col-md-3 text-right">
                  <button type="button" className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modalPassword"><i className="fas fa-plus"></i></button>
                  &nbsp;
                  <button type="button" className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modalJapaneseIME">IME</button>
                  &nbsp;
                  <button type="button" className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modalText">Text Modal</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <PasswordList passwords={passwords} handleRemovePassword={handleRemovePassword} handleEditPassword={handleEditPassword} />
            </div>

          </div>
        </div>

        <PasswordModal passwords={passwords} passwordValueRef={passwordValueRef} passwordIdRef={passwordIdRef} handleAddPassword={handleAddPassword} handleGeneratePassword={handleGeneratePassword} isModalShowed={isModalShowed} />
        <JapaneseModal />

        <TextModal />

      </main>

      <Footer />
    </>
  );
}

export default App;
