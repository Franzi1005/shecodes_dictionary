import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState();
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function handleResponse(response) {
    setResult(response.data);
    console.log(response);
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
      <Results data={result} />
    </div>
  );
}
