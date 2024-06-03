import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Front-End</h1>
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Contact Us</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="/">T&C</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
