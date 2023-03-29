import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";

export const MovieList = ({ urlPath, title }) => {
  const { movies } = useFetch(urlPath);
  useTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other: justify-evenly">
          {movies &&
            movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
        </div>
      </section>
    </main>
  );
};
