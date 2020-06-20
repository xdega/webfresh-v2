import React from "react";
import { useRoutes, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Views
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

const routes = [
  { path: "/", element: <Blog /> },
  { path: "/blog", element: <Blog /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/resume", element: <Resume /> },
  { path: "/contact", element: <Contact /> },
];

export default function App() {
  const element = useRoutes(routes);

  return (
    <div className="p-2 flex flex-col min-h-screen">
      <Header title="Webfresh" tagline="Web Development" />
      <Navbar />
      {element}
      <Footer content="Made with &hearts; by Liam Hockley" />
    </div>
  );
}
