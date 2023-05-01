import React from "react";
import "./Synonyms";

export default function Synonyms(props) {
  if (props.synonym) {
    return <span>{props.synonym}</span>;
  } else return null;
}
