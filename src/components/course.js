import React from "react";
import Content from "./content";

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <Content content={course} />
    </div>
  );
};

export default Course;
