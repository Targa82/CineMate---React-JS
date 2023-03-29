import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ urlPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  const { movies } = useFetch(urlPath, queryTerm);

  useTitle(`Search Result for ${queryTerm}`);

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white ">
          {movies.length === 0
            ? `No result found for ${queryTerm}`
            : `Result for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies &&
            movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
        </div>
      </section>
    </main>
  );
};
