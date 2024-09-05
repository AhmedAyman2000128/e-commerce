import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
export default function NavBar({ isSearchShown }) {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="store-info">
          <FontAwesomeIcon icon={faStore} size="2x" />
          <h1 className="store-name">Elgondi Store</h1>
        </div>
        {isSearchShown ? (
          <div className="search">
            <input
              type="text"
              placeholder="Search elgondi store"
              className="search-bar"
            />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        ) : null}
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <div></div>
        </div>
      </div>
    </div>
  );
}
