import { useState } from "react";
import "./filter.css";
export default function FilterSection({
  categoryList,
  handleCategoryChange,
  handleMaxPriceChange,
}) {
  const [maxPrice, setMaxPrice] = useState("");
  return (
    <div className="filter-section">
      <div className="container">
        <select
          className="category-list"
          onChange={(e) => {
            handleCategoryChange(e.target.value);
          }}
        >
          <option value="All">All</option>
          {categoryList.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <div className="price-sec">
          <input
            type="number"
            className="max-price"
            placeholder="Max price"
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
          />
          <button
            className="filter-btn"
            onClick={() => {
              handleMaxPriceChange(maxPrice);
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
