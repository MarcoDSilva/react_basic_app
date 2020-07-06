import React from "react";
import Content from "./content";

const Course = ({ course }) => {
  const reducer = (acc = 0, val) => acc + val;
  const parts = course.parts; //separating for cleaner code

  // first we map through the objects and take the exercise number, then we
  //sum them with reduce and reducer func
  const totalExercises = parts.map((v) => v.exercises).reduce(reducer);

  return (
    <div>
      <h1>{course.name}</h1>
      <Content content={course} />
      <h4>Total exercises: {totalExercises}</h4>
    </div>
  );
};

export default Course;
