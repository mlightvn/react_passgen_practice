import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'
import PasswordList from "./Components/PasswordList";
// import PasswordForm from "./Components/PasswordForm";
import PasswordModal from "./Components/PasswordModal";
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
    // https://www.npmjs.com/package/object-hash
    let hash = require('object-hash');

    let password = passwordValueRef.current.value

    let htpasswd = hash(password, { algorithm: 'md5', encoding: 'base64' })

    return htpasswd;

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
            <div className="card-header">
              <div className="row">
                <div className="col-md-9">
                  Password List
                </div>
                <div className="col-md-3 text-right">
                  <button type="button" className="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modalPassword"><i className="fas fa-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <PasswordList passwords={passwords} handleRemovePassword={handleRemovePassword} handleEditPassword={handleEditPassword} />
            </div>
{/*
            <div className="card-footer">
              <PasswordForm passwords={passwords} passwordValueRef={passwordValueRef} passwordIdRef={passwordIdRef} handleAddPassword={handleAddPassword} handleGeneratePassword={handleGeneratePassword} />
            </div>
*/}

          </div>
        </div>

        <PasswordModal passwords={passwords} passwordValueRef={passwordValueRef} passwordIdRef={passwordIdRef} handleAddPassword={handleAddPassword} handleGeneratePassword={handleGeneratePassword} isModalShowed={isModalShowed} />

      </main>
      <footer>
        <div className="container">
          <div className="row">
            Author:&nbsp;<a href="https://coxanh.coupon-pon.net/about" target="_blank" rel="noopener noreferrer" >Nguyen Ngoc Nam</a>
          </div>
          <div className="row">
            Social:&nbsp;
            <a href="https://www.linkedin.com/in/nguyenngocnam/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i> LinkedIn</a>
            &nbsp;|&nbsp;
            <a href="http://stackoverflow.com/users/6351894/ngoc-nam" rel="noopener noreferrer" ><span className="fab fa-stack-overflow"></span> StackOverFlow</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/namtenten" target="_blank" rel="noopener noreferrer" ><span className="fab fa-github"></span> GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
