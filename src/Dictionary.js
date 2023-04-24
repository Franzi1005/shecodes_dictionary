import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState({ answer: false });
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  function handleResponse(response) {
    console.log(response.data);
    setResult({
      answer: true,
      wordKind: response.data[0].meanings[0].partOfSpeech,
      word: response.data[0].word,
      meaning: response.data[0].meanings[0].definitions[0].definition,
    });
    console.log(result.meaning);
    console.log(result.word);
    console.log(result.wordKind);
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
