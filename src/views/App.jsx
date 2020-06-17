import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "../components/Header";
import Article from "../components/Article";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const routes = [
  { path: "/blog", content: <Article title="Blog" /> },
  { path: "/portfolio", content: <Article title="Portfolio" /> },
  { path: "/resume", content: <Article title="Resume" /> },
  { path: "/contact", content: <Article title="Contact" /> },
];

export default function App() {
  const content = useRoutes(routes);

  return (
    <div className="p-5 flex flex-col min-h-screen">
      <Header title="Webfresh" tagline="Web Development" />
      <Navbar links={links} />
      {content}
      <Footer content="Made with &hearts; by Liam Hockley" />
    </div>
  );
}
