import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import api from "../api/portfolio";
import Loader from "../components/Loader";
import Icon from "../components/Icon";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import ResponsiveThumbnail from "../components/ResponsiveThumbnail";
import Card from "../components/card";

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

    const techIcons = item.attributes.field_tech_icons.map((item, index) => {
      return <Icon iconString={item} key={index} />;
    });

    props.techIcons = techIcons;

    return <PortfolioItem {...props} key={item.id} />;
  });
  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="flex-grow mt-2 --fade-in">
        <PageHeading content="Portfolio" />
        {PortfolioItems}
      </main>
    );
  }
};

const PortfolioItem = (props) => {
  return (
    <Card>
      <ResponsiveThumbnail
        url={props.projectUrl}
        img={props.thumbnail}
        alt="Portfolio Thumbnail"
      />
      <div className="flex-auto ml-1 px-0">
        <SectionHeading>
          <span className="font-bold">{props.title}</span>
          <span>{props.techIcons}</span>
        </SectionHeading>
        <div className="flex justify-between flex-col px-2">
          <div className="sm:hidden leading-tight mt-1">{props.summary}</div>
          <div className="hidden sm:flex overflow-hidden mt-2">
            <span className="portfolio leading-tight">{parse(props.body)}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Portfolio;
