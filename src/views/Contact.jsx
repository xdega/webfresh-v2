import React, { useState } from "react";
import PageHeading from "../components/PageHeading";
import FormButton from "../components/FormButton";
import api from "../api/contact";

const Contact = () => {
  return (
    <main className="flex-grow">
      <PageHeading content="Contact" />
      <div className="flex">
        <ContactForm />
        <img
          className="hidden lg:flex w-1/2 mt-2 ml-3 opacity-50 --fade-in"
          style={{ maxHeight: "440px", maxWidth: "650px" }}
          src="https://images.unsplash.com/photo-1579486599242-f123e7d77288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
        />
      </div>
    </main>
  );
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    console.log("submitting form...");
    const params = {
      title: subject,
      message: message,
      sender: email,
    };
    api
      .send(params)
      .then(() => {
        window.alert("Your message was sent.\nThank You");
      })
      .finally(() => {
        setEmail("");
        setSubject("");
        setMessage("");
        setLoading(false);
      });
  };

  return (
    <form
      className="flex flex-col max-w-lg mx-auto md:mx-0 w-full lg:w-1/2"
      onSubmit={handleSubmit}
    >
      <input
        className="border border-gray-500 p-1 mt-2"
        type="email"
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-gray-500 p-1 mt-2"
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        rows="12"
        className="border border-gray-500 p-1 mt-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <FormButton type="submit" loading={loading} />
    </form>
  );
};

export default Contact;
