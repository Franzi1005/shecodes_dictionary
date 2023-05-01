import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState();
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  let pexelsApiKey = "vnnWF5KQ0ER4VJIX8Xpv7ixW1sJIXQ9bSRhvZSIHtufrVSaIhHZ5Gs6H";
  let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;

  function handleResponse(response) {
    setResult(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <Photos />
    </div>
  );
}
