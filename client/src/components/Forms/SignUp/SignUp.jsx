import {useNavigate} from "react-router-dom";
import { registerUser } from '../../../services/User'
import { useState } from "react";
import Layout from "../../Format/Layout/Layout";



export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <Layout>
    <div className="user-form-container">
    <form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        email,
        password
      }
      const resp = await registerUser(user)
      props.setCurrentUser(resp)

      navigate('/aircrafts')

    }}>
      <div className="user-form">
      <input type='text' placeholder="create a username" onChange={(e) => setUsername(e.target.value) } value={username} />
      <input type='text' placeholder="insert email" onChange={(e) => setEmail(e.target.value) } value={email} />
      <input type='password' placeholder="create a password" onChange={ (e) => setPassword(e.target.value)} value={password} />
      <button>Sign Up</button>
      </div>
    </form>
    </div>
    </Layout>
  )
}

