import "./filter.css";
export default function FilterSection({ categoryList }) {
  return (
    <div className="filter-section">
      <div className="container">
        <select className="category-list">
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
          <input type="number" className="max-price" placeholder="Max price" />
          <button className="filter-btn">Filter</button>
        </div>
      </div>
    </div>
  );
}
