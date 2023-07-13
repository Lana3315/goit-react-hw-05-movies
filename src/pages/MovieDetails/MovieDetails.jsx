import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const { movieId } = useParams()
   // useEffect(() => {
  // HTTP//
  // }, [])
  return (
    <>
      MovieDetails : { movieId}</>
  );
};
export default MovieDetails;