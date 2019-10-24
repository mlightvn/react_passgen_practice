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
    this.handleGeneratePassword = props.handleGeneratePassword.bind(this)

  }

  render() {
    let { password } = this.state;

    return (
      <>
        <input type="hidden" name="id" ref={this.props.passwordIdRef} />

        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                 <span className="input-group-text">Password</span>
              </div>
              <input type="text" className="form-control"
                name="password"
                ref={this.props.passwordValueRef}
              />
              <div className="input-group-append">
                <button type="button" onClick={this.handleGeneratePassword} className="btn btn-outline-success"><i className="fas fa-fingerprint"></i></button>
                <button type="button" onClick={this.handleAddPassword} className="btn btn-outline-primary"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

}

export default PasswordForm
