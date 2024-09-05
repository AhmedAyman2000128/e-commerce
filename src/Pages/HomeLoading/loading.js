import NavBar from "../../Components/navBar/navBar";
import FilterSection from "../../Components/filterSection/filter";
export default function Loading() {
  return (
    <>
      <NavBar isSearchShown={true} />
      <FilterSection categoryList={[]} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: 20,
        }}
      >
        Loading Products...
      </div>
    </>
  );
}
