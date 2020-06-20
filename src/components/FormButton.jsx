import React from "react";

const FormButton = ({ type, loading }) => {
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
  const buttonText = loading ? "Sending..." : "Send";
  const disabled = loading ? "disabled" : "";
  return (
    <button className={css.join(" ")} type={type} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default FormButton;
