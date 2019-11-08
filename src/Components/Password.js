import React from 'react'

export default function Password({ password, togglePassword, handleEditPassword, handleRemovePassword }) {
  function handleEditClick() {
    handleEditPassword(password.id)
    // let modal = document.getElementById("modalPassword")
    // modal.modal("show")
  }

  function handleRemoveClick() {
    handleRemovePassword(password.id)
  }

  return (
    <tr>
    	<td>{password.id}</td>
      <td>{password.value}</td>
    	<td>{password.htpasswd}</td>

    	<td>
    		<button type="button" onClick={handleEditClick} className="btn btn-sm btn-primary" data-toggle="modal" data-target="#modalPassword"><i className="fas fa-pencil-alt"></i></button>
    		&nbsp;
    		<button type="button" onClick={handleRemoveClick} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
    	</td>
    </tr>
  )
}
