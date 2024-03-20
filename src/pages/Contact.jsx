import React from "react";
import "../style/contact.css";
const Contact = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for contacting me. I'll get back to you shortly!");
  }

  return (
    <>
      <div className="container-fluid contact-container">
        <div className="row">
          <div className="col contact-info">
            <h1 className="contact-title">Contact Me</h1>
            <a href="https://www.linkedin.com/in/vicky-loui/">LinkedIn</a>
            <p className="contact-text">
              I'm always open to discussing projects, so feel free to connect
              with me on LinkedIn!
            </p>
            <a href="https://github.com/Louie888A">Github</a>
            <p className="contact-text">
              I'm always looking for new projects to work on, so feel free to
              check out my Github for more projects!
            </p>
            <a href="mailto:5kNnN@example.com">Email</a>
            <p className="contact-text">
              If you have any questions, comments, or suggestions, feel free to
              reach out!
            </p>
          </div>

          <div className="col contact-form">
            <h1 className="contact-title">Contact Me</h1>
            <form className="form">
              <label htmlFor="name">Name:</label>
              <br></br>
              <input type="text" id="name" name="name" />
              <label htmlFor="email">Email:</label>
              <br></br>
              <input type="email" id="email" name="email" />
              <label htmlFor="message">Message:</label>
              <br></br>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="48"
              ></textarea>
              <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Contact;
