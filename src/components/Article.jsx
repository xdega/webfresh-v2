import React from "react";

const Article = ({ title }) => {
  return (
    <div className="flex-grow">
      <h2>{title}</h2>
      <article className="">...</article>
    </div>
  );
};

export default Article;
