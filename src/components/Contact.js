import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us!</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
