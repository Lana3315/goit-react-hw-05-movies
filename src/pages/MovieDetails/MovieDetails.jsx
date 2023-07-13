import { useParams } from "react-router-dom";
import { Link,Outlet } from "react-router-dom";
const MovieDetails = () => {
  const { movieId } = useParams()
   // useEffect(() => {
  // HTTP//
  // }, [])
  return (
    <>
      <h1> MovieDetails : {movieId}</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;