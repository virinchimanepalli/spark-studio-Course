import React from "react";
import { useEffect, useState } from "react";
import "../Css/style.css";
import Img from "./image.jpg";
import { ICourse } from "./courses";

const Card = ({ course }: { course: ICourse }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={Img} alt="" style={{ objectFit: "cover", width: "100%" }} />
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
              marginTop: "5%",
              boxSizing: "border-box",
            }}
          >
            {course?.skills_required?.map((tag) => {
              return <span className="tag tag-teal">{tag}</span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
