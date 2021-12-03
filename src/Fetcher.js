import React, { useEffect, useState } from "react";
import axios from "axios";
import Repos from "./Repos";

const Fetcher = () => {
  const [repos, setRepos] = useState([]); // api.github repos list
  const [loading, setLoading] = useState(false); //Loading!...

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await axios.get("https://api.github.com/users/zikriramdani/repos");
      setRepos(res.data);
      setLoading(false);
    };
    fetchRepos();
  }, []);

  return (
    <Repos repos={repos} loading={loading} />
  );
};
export default Fetcher;
