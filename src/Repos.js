import React from "react";
import { Link } from "react-router-dom";

const Repos = ({ repos, loading }) => {
  // console.log(repos);
  if (loading) {
    return <div className="container">
    <div className="row mt-4">
      <h2>Loading...</h2></div></div>;
  }

  return (
    <div className="container">
      <div className="row mt-4">
        {repos.map(repo => (
          <div key={repo.id} className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src={repo.owner.avatar_url} alt="Card image cap" />
              <div className="card-body px-0">
                <p className="card-text">
                  <b>Name:</b> {repo.owner.login}
                  <br/>
                  <b>Repository name:</b> {repo.name}
                  <br/>
                  <b>Link:</b> <a href={repo.html_url} target="_blank">{repo.html_url}</a>
                </p>
                <Link
                  to={{
                    pathname: `/more/${repo.id}`,
                    state: { repo }
                  }}>
                  <button class="btn btn-primary">More</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Repos;
