import React from "react";

export default function Synonyms(props) {
  if (props.synonym) {
    return <div className="Synonyms">{props.synonym}</div>;
  } else return null;
}
