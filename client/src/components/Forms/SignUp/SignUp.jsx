import {useNavigate} from "react-router-dom";
import { registerUser } from '../../../services/User'
import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Layout from "../../components/Format/Layout/Layout";
// import Form from "react-bootstrap/Form";


export default function Register(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        email,
        password
      }
      const resp = await registerUser(user)
      props.setCurrentUser(resp)

      navigate('/')

    }}>
      <input type='text' onChange={(e) => setUsername(e.target.value) } value={username} />
      <input type='text' onChange={(e) => setEmail(e.target.value) } value={email} />
      <input type='password' onChange={ (e) => setPassword(e.target.value)} value={password} />
      <button>Sign Up</button>
    </form>
  )
}
// export default function UserSignUp() {
  
//   const navigate = useNavigate()

//     const newUser = {
//       username: "",
//       email: "",
//       password: ""
//     }

//     const { register, handleChange } = userRegister(newUser)

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (window.localStorage.getItem("authToken") == null) {
//         await registerUser(register)
//         navigate("/login");
//       } else {
//         alert("User already signed in");
//         navigate("/");
//       }
//     }

  // return (
  //   <div>
  //     <Layout>
  //       <Form
  //         className="signup-form"
  //         onSubmit={(e) => {
  //           handleSubmit(e)
  //         }}
  //       >
  //         <Form.Group>
  //           <Form.Label>Username</Form.Label>
  //           <Form.Control
  //             id="username"
  //             value={newUser.username}
  //             placeholder="Username"
  //             onChange={(e) => {
  //               handleChange(e.target.value)
  //             }}
  //           />
  //         </Form.Group>

  //         <Form.Group>
  //           <Form.Label>Email</Form.Label>
  //           <Form.Control
  //             id="email"
  //             value={newUser.email}
  //             placeholder="Email"
  //             onChange={(e) => {
  //               handleChange(e.target.value)
  //             }}
  //           />
  //         </Form.Group>

  //         <Form.Group>
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control
  //             id="password"
  //             value={newUser.password}
  //             placeholder="Create a password with at least 6 characters"
  //             type="password"
  //             onChange={(e) => {
  //               handleChange(e.target.value.toString())
  //             }}
  //           />
  //         </Form.Group>

          {/* <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control id="confirmPassword"
            value={newUser.confirmPassword}
            placeholder="Confirm password"
            type = "password"
            onChange={(e) => {
              (e.target.value)
            }} />
          </Form.Group> */}


//           <Button type="submit" variant="dark">
//             Create User Account
//           </Button>

//         </Form>
//       </Layout>
//     </div>
//   )
// }

