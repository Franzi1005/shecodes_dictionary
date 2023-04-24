import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <i>{props.meaning.partOfSpeech}</i>
      <p>{props.meaning.definitions[0].definition}</p>
    </div>
  );
}
