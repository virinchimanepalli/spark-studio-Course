import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { NavLink, Link } from "react-router-dom";
import "../Css/style.css";

export default function Navbar({
  onSearch,
  onFilter,
}: {
  onSearch: (value: any) => void;
  onFilter: (count: number) => void;
}) {
  return (
    <div
      style={{
        padding: "1.2% 1.8% 1.8% 1.8%",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        display: "flex",
        color: "white",
        fontFamily: "Nunito",
        fontWeight: "bold",
        fontSize: 14,
        height: "75px",
        boxShadow: "0px 0px 7px 0px #888888",
      }}
    >
      <div
        style={{ display: "flex", justifyItems: "flex-start", width: "100%" }}
      >
        <div
          style={{
            fontSize: "24px",
            color: "blue",
            width: "10%",
          }}
        >
          Spark studios
        </div>
        <div style={{ fontSize: "12px", marginLeft: "11%" }}>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          />
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <RiArrowDropDownFill color="black" size="30px" />
          </div>
          <div className="dropdown-content">
            <div
              onClick={() => {
                onFilter(20);
              }}
            >
              less than 20 Hours
            </div>
            <div
              onClick={() => {
                onFilter(25);
              }}
            >
              less than 25 Hours
            </div>
            <div
              onClick={() => {
                onFilter(35);
              }}
            >
              less than 35 Hours
            </div>
          </div>
        </div>

        <button type="button" className="icon-button">
          <AiOutlineShoppingCart color="black" size="28px" />{" "}
          <span className="icon-button__badge">2</span>
        </button>
      </div>
    </div>
  );
}
