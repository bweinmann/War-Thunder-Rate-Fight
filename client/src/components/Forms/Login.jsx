import "./Login.css"

export default function Login(props) {
  return (
    <div className="login">
      <form onSubmit={(e) => props.handleLogin(e)}>
        <h3>Login</h3>
        <input
          type="text"
          value={props.username}
          onChange={(e) => {
            props.setUsername(e.target.value)
          }}
          placeholder="username"
        />
        <br />
        <input
          type="password"
          value={props.password}
          onChange={(e) => {
            props.setPassword(e.target.value.toString())
          }}
          placeholder="create a password with at least 6 characters"
        />
        <br />
        <button onSubmit={() => props.setToggleLogin((prevToggle) => !prevToggle)}>Submit</button>
      </form>
    </div>
  )
}