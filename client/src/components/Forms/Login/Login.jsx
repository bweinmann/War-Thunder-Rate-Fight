import {useState} from 'react'
import { loginUser } from '../services/users'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        password
      }
      const resp = await loginUser(user)
      props.setCurrentUser(resp)

      navigate('/')

    }}>
      <input type='text' onChange={(e) => setUsername(e.target.value) } value={username} />
      <input type='password' onChange={ (e) => setPassword(e.target.value)} value={password} />
      <button>Login</button>
    </form>
  )
}

// import "./Login.css"

// export default function Login(props) {
//   return (
//     <div className="login">
//       <form onSubmit={(e) => props.handleLogin(e)}>
//         <h3>Login</h3>
//         <input
//           type="text"
//           value={props.username}
//           onChange={(e) => {
//             props.setUsername(e.target.value)
//           }}
//           placeholder="username"
//         />
//         <br />
//         <input
//           type="password"
//           value={props.password}
//           onChange={(e) => {
//             props.setPassword(e.target.value.toString())
//           }}
//           placeholder="create a password with at least 6 characters"
//         />
//         <br />
//         <button onSubmit={() => props.setToggleLogin((prevToggle) => !prevToggle)}>Submit</button>
//       </form>
//     </div>
//   )
// }