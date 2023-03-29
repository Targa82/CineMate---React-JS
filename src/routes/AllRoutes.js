import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList urlPath="movie/now_playing" title="Home" />}
          />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route
            path="movies/popular"
            element={<MovieList urlPath="movie/popular" title="Popular" />}
          />
          <Route
            path="movies/top"
            element={<MovieList urlPath="movie/top_rated" title="Top Rated" />}
          />
          <Route
            path="movies/upcoming"
            element={<MovieList urlPath="movie/upcoming" title="Upcoming" />}
          />
          <Route path="search" element={<Search urlPath="search/movie" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};
