import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, tagline }) => {
  return (
    <header className="flex --fade-in">
      <Link to="blog">
        <div className="p-3 py-1 bg-dark-lime text-center w-full xs:max-w-xs">
          <h1 className="text-5xl font-bold uppercase text-white leading-none font-header">
            {title}
          </h1>
          <p className="uppercase text-white text-lg pt-0">{tagline}</p>
        </div>
      </Link>
      <span className="hidden xs:block ml-1 flex-grow bg-light-lime --fade-in"></span>
    </header>
  );
};

export default Header;
