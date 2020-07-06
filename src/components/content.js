import React from "react";
import Part from "./part";

const Content = ({ content }) => {
  return (
    <div>
      {content.parts.map((parts) => (
        <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
      ))}
    </div>
  );
};

export default Content;
