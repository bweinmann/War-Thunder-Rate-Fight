import {useState} from "react";
import {useNavigate} from "react-router-dom";
// import signUpUser from "../../services"
import Button from "react-bootstrap/Button";
import Layout from "../../components/Format/Layout/Layout";
import Form from "react-bootstrap/Form";

const UserSignUp = () => {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const defaultUser = {
      username,
      email,
      password,
    }
    const resp = await signUpUser(defaultUser)
    props.setCurrentUser(resp)
    navigate("/aircraft")
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
              value={defaultUser.username}
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              value={defaultUser.email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              value={defaultUser.password}
              placeholder="Create a password with at least 6 characters"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value.toString())
              }}
            />
          </Form.Group>

          {/* <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control id="confirmPassword"
            value={defaultUser.confirmPassword}
            placeholder="Confirm password"
            type = "password"
            onChange={(e) => {
              (e.target.value)
            }} />
          </Form.Group> */}


          <Button type="submit" variant="dark">
            Create User Account
          </Button>

        </Form>
      </Layout>
    </div>
  )
}

export default UserSignUp