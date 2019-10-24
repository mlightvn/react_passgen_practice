import React, { Component } from 'react'

class PasswordForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      password : {
        id: '',
        value: '',
      }
    }

    this.state = {...this.initialState}
    this.handleAddPassword = props.handleAddPassword.bind(this)

  }

  // handleChange = event => {
  //   const { name, value } = event.target
  //   let password = this.state.password
  //   password[name] = value

  //   this.setState({password})
  // }

//   submitForm = () => {
//     // this.props.addEditUser(this.state.user)

//     // let state = {...this.initialState}
//     // this.setState(state)
// // console.log(this.state)

//     this.props.passwordRef.current.value = ""
//   }

  render() {
    let { password } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                 <span className="input-group-text">Password</span>
              </div>
              <input type="text" className="form-control"
                name="password"
                ref={this.props.passwordRef}
              />
              <div className="input-group-append">
                <button type="button" onClick={this.handleAddPassword} className="btn btn-primary"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

}

export default PasswordForm
