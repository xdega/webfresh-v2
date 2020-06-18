import React, { useState, useEffect } from "react";
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
    return <BlogItem title={title} body={body} key={item.id} />;
  });
  if (loading) {
    return <div className="flex-grow w-50">LOADING...</div>;
  } else {
    return (
      <div className="flex-grow --fade-in">
        <h2>Blog</h2>
        {blogItems}
      </div>
    );
  }
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
