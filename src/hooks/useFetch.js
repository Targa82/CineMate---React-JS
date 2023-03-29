import { useState, useEffect } from "react";

export const useFetch = (urlPath, queryTerm = "") => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${urlPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovie();
  }, [urlPath, queryTerm]);
  return { movies };
};
