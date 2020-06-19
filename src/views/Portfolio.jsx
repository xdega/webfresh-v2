import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import api from "../api/portfolio";
import Loader from "../components/Loader";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [included, setIncluded] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .index()
      .then((resp) => {
        setItems(resp.data.data);
        setIncluded(resp.data.included);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const PortfolioItems = items.map((item) => {
    const thumbnailId = item.relationships.field_thumbnail.data.id;
    let thumbnailUrl = "";

    const thumbAttributes = included.filter((item) => {
      return item.id == thumbnailId;
    });

    if (typeof thumbAttributes[0] !== "undefined") {
      const baseUrl = "https://api.webfresh.dev";
      const thumbPath = thumbAttributes[0].attributes.uri.url;
      thumbnailUrl = `${baseUrl}${thumbPath}`;
    }

    const props = {
      title: item.attributes.title,
      summary: item.attributes.body.summary,
      body: item.attributes.body.processed,
      projectUrl: item.attributes.field_project_url.uri,
      thumbnail: thumbnailUrl,
    };

    const techIcons = item.attributes.field_tech_icons.map((item) => {
      return <Icon iconString={item} />;
    });

    props.techIcons = techIcons;

    return <PortfolioItem {...props} key={item.id} />;
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

const PortfolioItem = (props) => {
  return (
    <article className="flex mt-2">
      <a href={props.projectUrl} className="flex-shrink-0" target="_blank">
        <img
          className="sm:hidden"
          src={props.thumbnail}
          alt="Portfolio Screenshot"
          width="75"
          height="75"
        />
        <img
          className="hidden sm:inline-block"
          src={props.thumbnail}
          alt="Portfolio Screenshot"
          width="150"
          height="150"
        />
      </a>
      <div className="flex-auto ml-1 px-0">
        <div className="uppercase text-white bg-dark-gray p-1 flex justify-between px-2">
          <span className="font-bold">{props.title}</span>
          <span>{props.techIcons}</span>
        </div>
        <div className="flex justify-between flex-col px-2">
          <div className="leading-tight mt-1">{props.summary}</div>
          <div className="hidden sm:flex overflow-hidden mt-2">
            <span className="leading-tight">{parse(props.body)}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

// To be factored out into /components
const Icon = ({ iconString }) => {
  return <i className={`${iconString} self-center ml-2`}></i>;
};

export default Portfolio;
