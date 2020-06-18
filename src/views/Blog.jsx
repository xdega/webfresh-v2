import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import api from "../api/article";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .index()
      .then((resp) => {
        setArticles(resp.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const blogItems = articles.map((item) => {
    const title = item.attributes.title;
    const body = item.attributes.body.value;
    let date = new Date(item.attributes.created);
    date = moment(date).format("DD MMMM YYYY");

    return <BlogItem title={title} body={body} date={date} key={item.id} />;
  });
  if (loading) {
    return (
      <div className="flex-grow">
        <div className="loader mt-3"></div>
      </div>
    );
  } else {
    return (
      <main className="flex-grow mt-2 --fade-in">
        <h2 className="sm:hidden text-dark-gray uppercase text-2xl font-header">
          Blog
        </h2>
        {blogItems}
      </main>
    );
  }
};

const BlogItem = ({ title, body, date }) => {
  return (
    <article className="flex mt-2 mb-5">
      <div className="flex-auto">
        <div className="uppercase text-white bg-dark-gray py-1 px-2 flex justify-between flex-col sm:flex-row">
          <span className="font-bold">{title}</span>
          <span>{date}</span>
        </div>
        <div className="leading-tight mt-1 px-2">{parse(body)}</div>
      </div>
    </article>
  );
};

export default Blog;
