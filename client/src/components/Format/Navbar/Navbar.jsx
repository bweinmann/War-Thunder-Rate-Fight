import "./Navbar.css"
import {Link} from 'react-router-dom'


const NavContainer = (props) => {

      return (
        <div className="nav">
          <h2>War Thunder Rate Fights</h2>
          {props.currentUser ?
            <>
              <h3>Welcome, {props.currentUser.username}!</h3>
              <button onClick={props.logout}>Log Out</button>
            </>
            :
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign Up</Link>
            </>
          }
          <Link to='/aircraft'>View Aircaft</Link>
        </div>
      )
    }

export default NavContainer