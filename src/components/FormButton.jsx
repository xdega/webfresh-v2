import React from "react";

const FormButton = ({ type }) => {
  const css = [
    "uppercase",
    "font-bold",
    "transition-colors",
    "duration-500",
    "ease-in-out",
    "hover:bg-dark-lime",
    "bg-light-lime",
    "text-white",
    "p-1",
    "mt-2",
  ];

  return (
    <button className={css.join(" ")} type={type}>
      Send
    </button>
  );
};

export default FormButton;
