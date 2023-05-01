import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <i>{props.meaning.partOfSpeech}</i>
      <p>{props.meaning.definitions[0].definition}</p>

      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <Synonyms synonym={synonym} />
          </div>
        );
      })}
    </div>
  );
}
