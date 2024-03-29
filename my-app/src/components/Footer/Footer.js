import "./Footer.css";
import gitHub from "../../images/github-icon.svg";
import linkedIn from "../../images/linkedin-icon.png";

const Footer = () => {
    return (
      <footer className="footer">
        <p className="footer__text">&copy; 2023 Supersite, Powered by News API</p>
  
        <div className="footer__links">
           {/* <Link to="/" className="footer__link">
            Home
          </Link>  */}
          <a
            href="https://tripleten.com/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
        </div>
        <ul className="footer__icons">
          <li className="footer__icon-item">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src={gitHub} className="footer__icon" alt="github" />
            </a>
          </li>
          <li className="footer__icon-item">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} className="footer__icon" alt="linkedIn" />
            </a>
          </li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;