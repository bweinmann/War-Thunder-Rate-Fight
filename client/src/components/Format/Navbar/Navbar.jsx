import "./Navbar.css"
import {Link} from 'react-router-dom'


const Navbar = (props) => {

  const { currentUser, logout } = props
  console.log(currentUser);
  
      return (
        <div className="nav">
           {currentUser ?
            <>
                <Link to="/"><h2>War Thunder Rate Fights</h2></Link>
                <h3>Welcome, {currentUser.username}!</h3>
                <Link to="/" onClick={logout}>Log Out</Link>
            </>
               : 
               <> 
              <Link to="/"><h2>War Thunder Rate Fights</h2></Link>
              <Link to='/login'>Log In</Link>      
              <Link to='/signup'>Sign Up</Link>
              <Link to='/aircrafts'>View Aircaft</Link>
              </>
              }
        </div>
      )
    }

export default Navbar