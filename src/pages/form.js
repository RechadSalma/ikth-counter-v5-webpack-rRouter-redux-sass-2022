import React from "react";

export default function Form() {
  return (
    <form name="iKcontactForm" method="POST" data-netlify="true">
      <p>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="NAME" />
      </p>
      <p>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="EMAIL" />
      </p>
      <p>
        <label htmlFor="message">Message: </label>
        <input type="text" id="message" name="MESSAGE" />
      </p>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
