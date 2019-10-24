import React from 'react'

export default function Password({ password, togglePassword }) {
  // function handleClick() {
  //   // togglePassword(password.id)
  // }
  
  return (
    <tr>
    	<td>{password.id}</td>
    	<td>{password.value}</td>
    </tr>
  )
}
