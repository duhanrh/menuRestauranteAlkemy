import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark ">
      <div className="container">
        <h3>Restaurante Bambini</h3>
        <p>
          Lorem ipsum loren loren
        </p>
        <div className="social-links">
          <a href="/#" className="twitter">
          <FontAwesomeIcon icon={['fab', 'twitter']}/>
          </a> 
          <a href="/#" className="facebook">
          <FontAwesomeIcon icon={['fab', 'facebook']}/>
          </a>
          <a href="/#" className="instagram">
          <FontAwesomeIcon icon={['fab', 'instagram']}/>
          </a>
          <a href="/#" className="google-plus">
          <FontAwesomeIcon icon={['fab', 'skype']}/>
          </a>
          <a href="/#" className="linkedin">
          <FontAwesomeIcon icon={['fab', 'linkedin']}/>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Restaurante Bambini</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://solucionesrh.net.co/">Duhan Renteria</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
