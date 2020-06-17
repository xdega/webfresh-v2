import React from "react";

const Header = ({ content }) => {
  const css = [
    "text-gray-800",
    "text-xl",
    "font-bold",
    "uppercase",
    "text-center",
    "mb-3",
  ];

  return <h1 className={css.join(" ")}>{content}</h1>;
};

export default Header;
