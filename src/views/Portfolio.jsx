import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import api from "../api/article";
import Loader from "../components/Loader";

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
      <div className="flex-auto ml-1">
        <div className="uppercase text-white bg-dark-gray p-1 px-2 flex justify-between">
          <span className="font-bold">Palm Business Center</span>
          <span>
            <i className="fab fa-wordpress self-center"></i>
          </span>
        </div>
        <div className="flex justify-between flex-col">
          <div className="leading-tight px-2 mt-1">
            Website redesign, using Wordpress, modern CSS/JS, and Twig.
          </div>
          <div>
            <div className="sm:hidden">
              <i className="fas fa-angle-down text-light-lime --collapse"></i>
            </div>
            <div className="content sm:max-h-full overflow-hidden">
              <h3 className="hidden sm:block  font-bold p-2 uppercase">Details</h3>
              <p className="leading-tight px-2">Expanded Description</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Portfolio;
