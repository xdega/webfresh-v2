import React from "react";

const ResponsiveThumbnail = ({ url, img, alt }) => {
  return (
    <a
      href={url}
      className="flex-shrink-0 hover:opacity-75 transition-all duration-500"
      target="_blank"
    >
      <img className="sm:hidden" src={img} alt={alt} width="75" height="75" />
      <img
        className="hidden sm:inline-block"
        src={img}
        alt={alt}
        width="150"
        height="150"
      />
    </a>
  );
};

export default ResponsiveThumbnail;
