import React from 'react';

const imgStyle = {
  float: "left",
  padding: "10px"
}

const Result = (props) => {
  return (
    <div className="Result">
      <img style={imgStyle} src={props.thumbnailURL} alt={"cover of " + props.title} />
      <h2><a href={props.googlePlayURL}>{props.title}</a></h2>
      <div>Author: {props.author}</div>
      <div>${props.price}</div>
      <p>{props.summary}</p>
    </div>
  )
}

export default Result;