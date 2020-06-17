import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  const article = [
    "Welcome to this simple starter template for React + TailwindCSS.",
    `This template comprises of a minimal React setup (no redux, no cra cli) 
    to serve as a starting point for a diverse array of projects`,
    `Tooling includes Tailwind CSS library and Webpack for processing a 
    Distribution that strips out all unused CSS.`,
  ];

  const links = ["blog", "portfolio", "resume", "contact"];

  return (
    <div className="p-5 flex flex-col min-h-screen">
      <Header title="Webfresh" tagline="Web Development" />
      <Navbar links={links} />
      <Article content={article} />
      <Footer content="Made with &hearts; by Liam Hockley" />
    </div>
  );
};

export default App;
