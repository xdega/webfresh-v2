import React from "react";
import PageHeading from "../components/PageHeading";

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
  // form handler
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitting form...");
    console.log(`Email Address: ${email}`);
  };

  return (
    <form
      className="flex flex-col mt-2 max-w-lg mx-auto md:mx-0 w-full lg:w-1/2"
      onSubmit={handleSubmit}
    >
      <FormInputText type="email" placeholder="Your Email Address" />
      <FormInputText type="text" placeholder="Your Name" />
      <FormInputText type="text" placeholder="Subject" />
      <FormTextArea />
      <FormSubmitButton />
    </form>
  );
};

// Refactor Form controls to /components
const FormInputText = ({ placeholder, type }) => {
  return (
    <input
      className="border border-gray-500 p-1 mt-2"
      type={type}
      placeholder={placeholder}
    />
  );
};

const FormTextArea = () => {
  return (
    <textarea
      className="border border-gray-500 p-1 mt-2"
      cols="30"
      rows="10"
    ></textarea>
  );
};

const FormSubmitButton = () => {
  const css = [
    "uppercase",
    "font-bold",
    "transition-colors",
    "duration-500",
    "ease-in-out",
    "hover:bg-dark-lime",
    "bg-light-lime",
    "text-white",
    "p-1",
    "mt-2",
  ];

  return (
    <button className={css.join(" ")} type="submit">
      Send
    </button>
  );
};

export default Contact;
