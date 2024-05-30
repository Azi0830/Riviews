import { createContext, useEffect, useState } from "react";
import { movies as mock_movies } from "../utils";

export const MovieContext = createContext(null);

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState(mock_movies);

  const fetchData = async () => {
    const url =
      "https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d8210e6f72mshbe95abeef5a1df2p1c93bfjsncec30704eada",
        "x-rapidapi-host": "ott-details.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result.results || []); // Assuming the response has a "results" field containing the movies array
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
