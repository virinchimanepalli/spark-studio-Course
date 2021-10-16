import React from "react";
import "../Css/style.css";
import Card from "./card";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { RiArrowDropDownFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { API, ICourse } from "./utils";

const Courses = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [searchData, setSearchData] = useState<ICourse[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<ICourse[]>([]);

  const searchItem = (query: string) => {
    const fuse = new Fuse(courses, {
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 100,
      keys: ["course_name", "details", "skills_required"],
    });

    const result = fuse.search(query);
    const finalResult: ICourse[] = [];
    if (result.length) {
      result.forEach((item) => {
        finalResult.push(item.item);
      });
      setSearchData(finalResult);
    } else {
      setSearchData(courses);
    }
  };
  useEffect(() => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCourses(data);
        setSearchData(data);
      });
  }, []);

  useEffect(() => {
    setSearchData(
      courses.filter((item) => item.hours_of_class_per_month < count)
    );
  }, [count]);

  return (
    <>
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
              fontSize: "25px",
              color: "#a435f0",
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
                searchItem(e.target.value);
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
                  setCount(20);
                }}
              >
                less than 20 Hours
              </div>
              <div
                onClick={() => {
                  setCount(25);
                }}
              >
                less than 25 Hours
              </div>
              <div
                onClick={() => {
                  setCount(35);
                }}
              >
                less than 35 Hours
              </div>
            </div>
          </div>

          <button type="button" className="icon-button">
            <AiOutlineShoppingCart color="black" size="28px" />{" "}
            <span className="icon-button__badge">{selectedItems.length}</span>
          </button>
        </div>
      </div>
      <div className="main">
        <div className="container">
          {searchData.map((course) => {
            return (
              <Card
                key={Math.random() * 45185}
                course={course}
                onSelectCourse={(selectedItem: ICourse) => {
                  const isPresent = selectedItems.filter(
                    (item) => item.course_name === selectedItem.course_name
                  );
                  if (isPresent.length) {
                    setSelectedItems((_item) =>
                      _item.filter(
                        (item) => item.course_name !== selectedItem.course_name
                      )
                    );
                  } else {
                    setSelectedItems((item) => [...item, selectedItem]);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
