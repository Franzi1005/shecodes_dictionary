import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <i>{props.meaning.partOfSpeech}</i>
      <p className="definition">{props.meaning.definitions[0].definition}</p>
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div className="Synonyms" key={index}>
            <Synonyms synonym={synonym} />
          </div>
        );
      })}
    </div>
  );
}
