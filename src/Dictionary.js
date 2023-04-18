import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
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
