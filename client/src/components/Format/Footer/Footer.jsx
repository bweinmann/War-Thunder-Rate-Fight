import './Footer.css';
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

const Footer = () => {

    return (  
        <div className="main-footer">
          <h4 className="footer-header">Contact</h4>
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                 <a className="social-link" href="www.linkedin.com/in/blake-weinmann"><AiFillLinkedin /></a>
                </ul>
              </div>
            <div className="col">
              <ul className="list-unstyled">
               <a className="social-link" href="https://github.com/bweinmann"><AiFillGithub /></a>
              </ul>
            </div>
          </div>
      </div>
    )
}

export default Footer;