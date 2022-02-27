import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Layout from "../../components/Format/Layout/Layout";
import Form from "react-bootstrap/Form";

const default_User = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const baseURL = "localhost:3000"

const UserSignUp = () => {
  const [newUser, setNewUser] = useState(default_User)
  const navigate = useNavigate()

  const handleTextInput = (e) => {
    const {id, value} = e.target
    setNewUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    if (newUser.password !== newUser.confirmPassword) {
      e.preventDefault()
      alert("Your passwords must match!")
    } else {
      e.preventDefault()
      await axios({
        method: "post",
        url: `${baseURL}user-api/sign-up`,
        data: newUser,
      })
        .then(() => {
          navigate("/")
        })
        .catch((error) => {
          console.log(error)
          navigate("/")
        })
    }
  }

  return (
    <div>
      <Layout>
        <Form
          className="signup-form"
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              id="username"
              value={newUser.username}
              placeholder="Username"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              value={newUser.email}
              placeholder="Email"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              value={newUser.password}
              placeholder="Password"
              type="password"
              onChange={(e) => {
                handleTextInput(e)
              }}
            />
          </Form.Group>

          <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control id="confirmPassword"
            value={newUser.confirmPassword}
            placeholder="Confirm password"
            type = "password"
            onChange={(e) => {
              handleTextInput(e)
            }} />
          </Form.Group>


          <Button type="submit" variant="dark">
            Create Account
          </Button>

        </Form>
      </Layout>
    </div>
  )
}

export default UserSignUp