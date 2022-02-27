import React from 'react'
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const {input, setInput, setLogging } = props;

  let navigate = useNavigate();
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogging((prevlog)=>!prevlog);
    navigate("/");
  }

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value}=e.target
      setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <label>Username</label>
      <input name="username" placeholder="username" onChange={(e) => { handleChange(e) }} />
      <label>Password</label>
      <input name="password" placeholder="password" onChange={(e) => { handleChange(e) }} />
      <button>Submit</button>
    </form>
  )
}