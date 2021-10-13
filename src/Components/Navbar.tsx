import React, { useState, useEffect } from "react";
import "../Css/style.css";

export default function Navbar({
  onSearch,
}: {
  onSearch: (value: any) => void;
}) {
  return (
    <div
      style={{
        padding: "1.8%",
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
        <div style={{ fontSize: "12px", marginLeft: "7%" }}>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              onSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
