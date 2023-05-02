import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="container text-center">
          <div className="col">
            {props.photos.map(function (photo, index) {
              return (
                <a
                  href={photo.src.original}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    className="img-fluid small-pic"
                  ></img>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
