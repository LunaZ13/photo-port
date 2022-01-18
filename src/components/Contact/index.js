import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ [e.target]: e.target.value });
    console.log(formState);
  }


const handleChange = (e) => {
  if (e.target.name === 'email') {
    const isValid = validateEmail(e.target.value);
    console.log(isValid);
    // isValid conditional statement
    if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }  else {
      if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
      } else {
          setErrorMessage('');
      }
  }
  if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log(formState);
  }
};
  
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            rows="5"
            onBlur={handleChange}
          ></textarea>
        </div>
        {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
