import '../App.scss';
import '../Mobile.scss';
import logoWhite from '../LOGO-White.svg';

function Footer() {
    return (
      <footer className="footer">
        <img src={logoWhite} alt="Kasa Logo" className="footer__logo" />
        <p className="footer__text footer__text--desktop">&copy; 2020 Kasa. All rights reserved</p>
        <p className="footer__text footer__text--mobile">&copy; 2020 Kasa. All<br /> rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;