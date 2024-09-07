import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Brands icons
import { faHouse, faStore } from "@fortawesome/free-solid-svg-icons"; // Solid icons
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <FontAwesomeIcon icon={faStore} />
        </div>
        <h2>Contact us</h2>
        <div className="icons">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <p>
          &copy; 2024 <span>Elgondi Store</span> All Right Reserved
        </p>
      </div>
    </div>
  );
}
