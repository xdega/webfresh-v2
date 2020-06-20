import React from "react";

const PageHeading = ({ content }) => {
  return (
    <h2 className="sm:hidden text-dark-gray uppercase text-2xl font-header">
      {content}
    </h2>
  );
};

export default PageHeading;
