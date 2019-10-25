import React, { Component } from 'react'

class PasswordModal extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      password : {
        id: '',
        value: '',
      },
      isModalShowed : false,
    }

    this.state = {...this.initialState}
    this.handleAddPassword = props.handleAddPassword.bind(this)
    this.handleGeneratePassword = props.handleGeneratePassword.bind(this)

    // this.onOpenModal = this.onOpenModal.bind(this);
    // this.onCloseModal = this.onCloseModal.bind(this);
    // this.state = {
    //      open:true

    //    };

  }

  render() {
    // let { password, isModalShowed } = this.state;

    return (
      <>
        <div className="modal" id="modalPassword">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Add/edit password</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <div className="row">
                  <input type="hidden" name="id" ref={this.props.passwordIdRef} />

                  <div className="col-md-12">
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
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div>

      </>
    );
  }

}

export default PasswordModal
