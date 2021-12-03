import React from "react";

import { Link } from "react-router-dom";

const More = props => {
 
  const element = props.location.state.repo;
  console.log(props.location.state.repo);
  return (
    <div className="container">
      <div className="card">
        <img className="card-img-top w-25" src={element.owner.avatar_url} alt="Card image cap" />
        <div className="card-body px-0">
          <p className="card-text">
            <b>Name:</b> {element.owner.login}
            <br/>
            <b>Repository name:</b> {element.name}
            <br/>
            <b>Link:</b> <a href={element.html_url} target="_blank">{element.html_url}</a>
          </p>
          <Link to="/">
            <button className="btn btn-info">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default More;
