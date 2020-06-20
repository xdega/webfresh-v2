import React from "react";

const Card = (props) => {
  return (
    <article className="flex mt-2 mb-3 shadow-lg pb-3">
      {props.children}
    </article>
  );
};

export default Card;
