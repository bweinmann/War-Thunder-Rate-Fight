import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/User'
import Button from 'react-bootstrap/Button'

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
    <div>
      <Button
        className="signin-button"
        onClick={(e) => {
          toggleClass(e)
        }}
        variant="light"
      >
        Sign In
      </Button>

      <div className="form-container">

        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >   
          <fieldset className={field}>
            <legend className="legend1">Sign In</legend>
            <input
              name="username"
              value={user.username}
              placeholder="username"
              onChange={(e) => {
                handleTextInput(e)
              }}
            ></input>
            <br />
            <input
              name="password"
              value={user.password}
              placeholder="password"
              onChange={(e) => {
                handleTextInput(e)
              }}
            ></input>
            <br />
            <Button type="submit" variant="dark">
              Sign In
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
