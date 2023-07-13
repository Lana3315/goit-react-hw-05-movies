import { Link } from "react-router-dom";
const Movies = () => {
  // useEffect(() => {
  // HTTP//
  // }, [])
  return (
    <div>
    <input></input>
      <button type="button">Search</button>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5', 'movie-6', 'movie-7', 'movie-8', 'movie-9'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>{movie}</Link>
        );
      })}
      </div>
  );
};
export default Movies;