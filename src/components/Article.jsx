import React from "react";

const Article = ({ content }) => {
  const paragraphs = content.map((item) => {
    return <p className="mt-2">{item}</p>;
  });

  const css = [
    "text-gray-800",
    "bg-gray-100",
    "p-3",
    "pt-0",
    "border-2",
    "border-gray-300",
    "max-w-xl",
    "mx-auto",
    "mb-auto",
  ];

  return (
    <div className="flex-grow">
      <article className={css.join(" ")}>{paragraphs}</article>
    </div>
  );
};

export default Article;
