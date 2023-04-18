import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="form-control"
          placeholder="Type something... "
          onChange={handleChange}
        ></input>
        <input type="submit" className="btn btn-primary" value="Search"></input>
      </form>{" "}
    </div>
  );
}
