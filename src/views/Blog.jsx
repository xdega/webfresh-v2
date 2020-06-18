import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import api from "../api/article";

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.index().then((resp) => {
      setArticles(resp.data.data);
    });
  }, []);

  const blogItems = articles.map((item) => {
    const title = item.attributes.title;
    const body = item.attributes.body.value;
    return <BlogItem title={title} body={body} key={item.id} />;
  });

  return (
    <div className="flex-grow">
      <h2>Blog</h2>
      {blogItems}
    </div>
  );
};

const BlogItem = ({ title, body }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>{parse(body)}</div>
    </article>
  );
};

export default Blog;
