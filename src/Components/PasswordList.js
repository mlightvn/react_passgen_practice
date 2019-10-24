import React from 'react'
import Password from './Password'

export default function PasswordList({ passwords, togglePassword }) {

	const rows = passwords.map(password => {
	  return <Password key={password.id} togglePassword={togglePassword} password={password} />
	})

	return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>uuid</th>
					<th>Password</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}
