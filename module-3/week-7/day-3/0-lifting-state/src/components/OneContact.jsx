import React from "react";

const OneContact = (props) => {
	const { name, email, deleteContact } = props;

	return (
		<p>
			<button onClick={() => deleteContact(email)}>🗑️</button>
			<span className="name">{name}</span>
			<span className="email">{email}</span>
		</p>
	);
};

export default OneContact;
