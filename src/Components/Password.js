import React from 'react'

export default function Password({ password, togglePassword, handleRemovePassword }) {
  function handleEditClick() {
    // handleRemovePassword(password.id)
  }

  function handleRemoveClick() {
    handleRemovePassword(password.id)
  }

  return (
    <tr>
    	<td>{password.id}</td>
    	<td>{password.value}</td>
    	<td>
    		<button type="button" onClick={handleEditClick} className="btn btn-sm btn-primary"><i className="fas fa-pencil-alt"></i></button>
    		&nbsp;
    		<button type="button" onClick={handleRemoveClick} className="btn btn-sm btn-danger"><i className="fas fa-trash"></i></button>
    	</td>
    </tr>
  )
}
