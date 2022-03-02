import {useState} from 'react'
import { loginUser } from '../../../services/User'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  const navigate = useNavigate()

  return (
    <div className="user-form-container">
    <form onSubmit={async (e) => {
      e.preventDefault()

      const loginData = {
        username,
        password
      }

      const res = await loginUser(loginData)
      props.setCurrentUser(res)

      navigate('/aircrafts')

    }}>
      <div className="user-form">
      <input type='text' onChange={(e) => setUsername(e.target.value) } value={username} />
      <input type='password' onChange={ (e) => setPassword(e.target.value)} value={password} />
      <button>Login</button>
      <h4>Sign up to create an account <Link to='/signup'>here</Link></h4>
      </div>
    </form>
    </div>
  )
}
