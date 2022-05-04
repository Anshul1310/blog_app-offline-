import styles from '../styles/contact.module.css';
import {useState} from "react";
import React from 'react';

const Contact=()=>{
	const [name,setName]=useState("");
	const [email,setEmail]=useState("");
	const [query,setQuery]=useState("");

	const handleSubmit=(e)=>{
		e.preventDefault();

		fetch('http://localhost:3000/api/contact', {
		  method: 'POST', // or 'PUT'
		  headers: {
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		  	name,email,query
		  }),
		})
		.then(response => response.json())
		.then(data => {
		  alert("Success!!");
		  setName("");
		  setEmail("");
		  setQuery("");
		})
		.catch((error) => {
		  console.error('Error: frontend', error);
		});
	}

	return(<div>
		<form className={styles.main} onSubmit={handleSubmit}>
			<input value={name} onChange={(e)=>setName(e.target.value)} placeholder="John Doe" type="text" />
			<input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" />
			<input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Query" type="text" />	
			<button type="submit">SUBMIT</button>
		</form>
	</div>)
}

export default Contact;
