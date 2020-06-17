import React from "react";

const Navbar = ({ links }) => {
  return (
    <nav className="--fade-in">
      <ul className="flex mt-1">
        <NavItem path="#" iconString="fas fa-pen-nib" name="blog" />
        <NavItem path="#" iconString="fas fa-pen-nib" name="blog" />
        <NavItem path="#" iconString="fas fa-pen-nib" name="blog" />
        <NavItem path="#" iconString="fas fa-pen-nib" name="blog" />
        <NavItem path="#" iconString="fas fa-pen-nib" name="blog" />
        <span className="bg-light-lime py-1 p-3 flex-grow"></span>
      </ul>
    </nav>
  );
};

const NavItem = ({ path, iconString, name }) => {
  const navItemCss = [
    "whitespace-no-wrap",
    "bg-dark-lime",
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

  return (
    <li className={navItemCss.join(" ")}>
      <a href={path}>
        <i className={`${iconString} fa-lg`}></i>
        <span className="hidden sm:inline-block uppercase border-l-2 ml-1 pl-2 border-white ">
          {name}
        </span>
      </a>
    </li>
  );
};

export default Navbar;
