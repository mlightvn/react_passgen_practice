import React from 'react'
import Password from './Password'

export default function PasswordList({ passwords, togglePassword, handleEditPassword, handleRemovePassword }) {

	const rows = passwords.map(password => {
	  return <Password key={password.id} togglePassword={togglePassword} password={password} handleRemovePassword={handleRemovePassword} handleEditPassword={handleEditPassword} />
	})

	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>uuid</th>
					<th>Password</th>
					<th>htpasswd</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}
