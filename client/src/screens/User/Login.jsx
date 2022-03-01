// import "./login.css"

// export default function Login(props) {
//   return (
//     <div className="login-container">
//       <form onSubmit={(e) => props.handleLogin(e)}>
//         <h4>Login to post reviews and comments</h4>
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