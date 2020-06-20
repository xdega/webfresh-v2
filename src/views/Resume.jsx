import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import api from "../api/resume";
import Loader from "../components/Loader";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/card";

const Blog = () => {
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

  const resumeItems = items.map((item) => {
    const title = item.attributes.title;
    const body = item.attributes.body.value;

    return <ResumeItem title={title} body={body} key={item.id} />;
  });
  if (loading) {
    return <Loader />;
  } else {
    return (
      <main className="flex-grow mt-2 --fade-in">
        <PageHeading content="Resume" />
        {resumeItems}
      </main>
    );
  }
};

const ResumeItem = ({ title, body }) => {
  return (
    <Card>
      <div className="flex-auto">
        <SectionHeading>
          <span className="font-bold">{title}</span>
        </SectionHeading>
        <div className="leading-tight mt-1 px-2">{parse(body)}</div>
      </div>
    </Card>
  );
};

export default Blog;
