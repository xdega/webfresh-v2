import React from "react";

const Footer = ({ content }) => {
  const css = ["text-gray-500", "text-center"];

  return <footer className={css.join(" ")}>{content}</footer>;
};

export default Footer;
