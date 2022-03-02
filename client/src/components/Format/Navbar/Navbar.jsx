import "./Navbar.css"
import {Link} from 'react-router-dom'


const Navbar = (props) => {

  const { currentUser, logout } = props
   
      return (
        <div className="nav">
           {currentUser ?
            <>
                <Link className="nav-brand" to="/">War Thunder Rate Fights</Link>
                <h3>Welcome, {currentUser.username}!</h3>
                <Link className="nav-links" to="/" onClick={logout}>Log Out</Link>
            </>
               : 
               <> 
                <Link className="nav-brand"to="/">War Thunder Rate Fights</Link>
                <div className="nav-links-container">
                  <Link className="nav-links"to='/login'>Log In</Link>      
                  <Link className="nav-links"to='/signup'>Sign Up</Link>
                  <Link className="nav-links"to='/aircrafts'>View Aircaft</Link>
                </div>
              </>
              }
        </div>
      )
    }

export default Navbar