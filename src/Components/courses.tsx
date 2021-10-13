import React from "react";
import "../Css/style.css";
import Card from "./card";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

const API = "https://60311c91081a010017546ce1.mockapi.io/api/courses";

export interface ICourse {
  class_requirements: string[];
  course_name: string;
  details: string;
  hours_of_class_per_month: number;
  skills_required: string[];
}

const Courses = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [searchData, setSearchData] = useState<ICourse[]>(courses);

  const searchItem = (query: string | Fuse.Expression) => {
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

  return (
    <>
      <Navbar onSearch={searchItem} />
      <div className="main">
        <div className="container">
          {searchData.map((course) => {
            return <Card course={course} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
