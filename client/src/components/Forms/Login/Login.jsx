import {useState} from 'react'
import { loginUser } from '../../../services/User'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      const res = await loginUser(loginData)
      props.setCurrentUser(res)

      navigate('/aircraft')

    }}>
      <input type='text' onChange={(e) => handleChange(e.target.value) } value={loginData.username} />
      <input type='password' onChange={ (e) => handleChange(e.target.value)} value={loginData.password} />
      <button>Login</button>
      <h4>Sign up to create an account<Link to='/signup'>here</Link></h4>
    </form>
  )
}
