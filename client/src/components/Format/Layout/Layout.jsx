import "./Layout.css";
import NavContainer from "../NavContainer/NavContainer";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="page-display">
      <NavContainer user={props.user} />
      <div className="display-content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout;
