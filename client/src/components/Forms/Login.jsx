import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/User'

export default function Login(props) {
  const [input, setInput] = useState({
    username: "",
    password: "", 
  }); 

  let navigate = useNavigate();
  const { setCurrentUser } = props;
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = await loginUser(input);
    setCurrentUser(user);
    navigate("/");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const {username, value}=e.target
      setInput((prevInput) => ({
      ...prevInput,
      [username]: value
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