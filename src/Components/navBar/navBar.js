import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function NavBar({ isSearchShown, handleSearchChange }) {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");
  return (
    <div className="nav-bar">
      <div className="container">
        <div
          className="store-info"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faStore} size="2x" />
          <h1 className="store-name">Elgondi Store</h1>
        </div>
        {isSearchShown ? (
          <div className="search">
            <input
              type="text"
              placeholder="Search elgondi store"
              className="search-bar"
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleSearchChange(searchWord);
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        ) : null}
        <div
          className="cart"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/cart");
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </div>
      </div>
    </div>
  );
}
