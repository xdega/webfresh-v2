import React from "react";
import { Link } from "react-router-dom";

const navItemCss = [
  "whitespace-no-wrap",
  "bg-light-lime",
  "transition-colors",
  "duration-500",
  "ease-in-out",
  "hover:bg-dark-lime",
  "px-3",
  "py-1",
  "text-white",
  "font-bold",
  "w-auto",
  "mr-1",
  "cursor-pointer",
];

const Navbar = () => {
  return (
    <nav className="--fade-in">
      <ul className="flex mt-1">
        <InternalNavItem to="blog" iconString="fas fa-pen-nib" name="blog" />
        <InternalNavItem
          to="portfolio"
          iconString="fas fa-folder"
          name="portfolio"
        />
        <InternalNavItem to="resume" iconString="fas fa-award" name="resume" />
        <InternalNavItem
          to="contact"
          active
          iconString="fas fa-envelope"
          name="contact"
        />
        <ExternalNavItem
          path="https://github.com/xdega"
          iconString="fab fa-github"
          name="github"
        />
        <span className="bg-light-lime py-1 p-3 flex-grow"></span>
      </ul>
    </nav>
  );
};

const InternalNavItem = ({ to, iconString, name }) => {
  return (
    <li className={navItemCss.join(" ")}>
      <Link to={to}>
        <i className={`${iconString} fa-lg`}></i>
        <span className="hidden sm:inline-block uppercase border-l-2 ml-1 pl-2 border-white ">
          {name}
        </span>
      </Link>
    </li>
  );
};

const ExternalNavItem = ({ path, iconString, name }) => {
  return (
    <li className={navItemCss.join(" ")}>
      <a href={path} target="_blank">
        <i className={`${iconString} fa-lg`}></i>
        <span className="hidden sm:inline-block uppercase border-l-2 ml-1 pl-2 border-white">
          {name}
        </span>
      </a>
    </li>
  );
};

export default Navbar;
