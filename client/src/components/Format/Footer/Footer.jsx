import './Footer.css';

const Footer = () => {

    return (  
        <div className="main-footer">
          <h4 className="footer-header">Contact Us</h4>
            <div className="row">
              <div className="col">
                <ul className="list-unstyled">
                 <a className="social-link" href="www.linkedin.com/in/blake-weinmann">LinkedIn</a>
                </ul>
              </div>
            <div className="col">
              <ul className="list-unstyled">
               <a className="social-link" href="https://github.com/bweinmann">Github</a>
              </ul>
            </div>
            <div className="col">
             <ul className="list-unstyled">
              <a className="social-link" href="/">Portfolio</a>
              </ul>
            </div>
          </div>
      </div>
    )
}

export default Footer;