import React from "react";
import Part from "./part";

const Content = ({ content }) => {
  return (
    <ul>
      {content.parts.map((parts) => (
        <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
      ))}
    </ul>
  );
};

export default Content;
