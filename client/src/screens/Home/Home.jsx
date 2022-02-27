import "./Home.css"
import Layout from "../../components/Format/Layout/Layout"
import {Link} from "react-router-dom"

export default function HomePage(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className="home-container">
          <div className="home-container-left">
            <Link to="/reviews" style={{textDecoration: "none"}}>
              <button className="home-button-left">View Reviews</button>
            </Link>
          </div>
          <div className="home-container-right">
            <Link to="/signup" style={{textDecoration: "none"}}>
              <button className="home-button-right">Sign Up</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
