import React from "react";
import { useEffect, useState } from "react";
import "../Css/style.css";
import Img from "./image.jpg";
import { ICourse } from "./courses";

const Card = ({
  course,
  onSelectCourse,
}: {
  course: ICourse;
  onSelectCourse: (val: ICourse) => void;
}) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={Img} alt="" className="img-card" />
        </div>
        <div className="card-body">
          <h4>{course.course_name}</h4>
          <div
            style={{
              textAlign: "justify",
              fontSize: "12px",
            }}
          >
            {course.details.length > 294
              ? course.details.substring(0, 294) + "    ............."
              : course.details}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "7%",
              boxSizing: "border-box",
            }}
          >
            {course?.skills_required?.map((tag) => {
              return <span className="tag tag-teal">{tag}</span>;
            })}
          </div>
        </div>

        <button
          className="udlite-btn udlite-btn-brand udlite-text-color"
          onClick={() => {
            onSelectCourse(course);
          }}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Card;
