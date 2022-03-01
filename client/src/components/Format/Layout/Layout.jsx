import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  const { currentUser, logout } = props
  return (
    <div className="page-display">
      <Navbar currentUser={currentUser} logout={logout}/>
      <div className="display-content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout;
