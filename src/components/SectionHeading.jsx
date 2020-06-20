import React from "react";

const SectionHeading = (props) => {
  return (
    <div className="uppercase text-white bg-dark-gray p-1 flex justify-between px-2">
      {props.children}
    </div>
  );
};

export default SectionHeading;
