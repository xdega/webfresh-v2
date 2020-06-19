import React, { useState, useEffect } from "react";
import api from "../api/article";
import Loader from "../components/Loader";

// Component Logic
const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .index()
      .then((resp) => {
        setItems(resp.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let i = 0;
  const PortfolioItems = items.map((item) => {
    i++;
    return <PortfolioItem key={i} />;
  });
  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="flex-grow mt-2 --fade-in">
        <h2 className="sm:hidden text-dark-gray uppercase text-2xl font-header">
          Portfolio
        </h2>
        {PortfolioItems}
      </main>
    );
  }
};

const PortfolioItem = ({}) => {
  return (
    <article className="flex mt-2">
      <a href="#" className="flex-shrink-0">
        <img
          className="sm:hidden"
          src="https://via.placeholder.com/75"
          alt="Portfolio Screenshot"
        />
        <img
          className="hidden sm:inline-block"
          src="https://via.placeholder.com/150"
          alt="Portfolio Screenshot"
        />
      </a>
      <div className="flex-auto ml-1 px-0">
        <div className="uppercase text-white bg-dark-gray p-1 flex justify-between px-2">
          <span className="font-bold">Palm Business Center</span>
          <span>
            <i className="fab fa-wordpress self-center"></i>
          </span>
        </div>
        <div className="flex justify-between flex-col px-2">
          <div className="leading-tight mt-1">
            Website redesign, using Wordpress, modern CSS/JS, and Twig.
          </div>
          <div className="hidden sm:flex overflow-hidden mt-2">
            <p className="leading-tight">Expanded Description</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
