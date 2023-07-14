import { useEffect, useState, useRef } from 'react';
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import MovieDetailsSkeleton from './MovieDetailsSkeleton';
import status from '../../services/status';
import api from '../../services/api';
import css from './MovieDetails.module.css';
import DetailsMovie from 'components/DetailsMovie/DetailsMovie';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [statusPage, setStatusPage] = useState(status.START);

  const { movieId } = useParams();
  const locRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    locRef.current = location.state?.from ?? '/';
    const dataConversion = obj => {
      const genres = obj.genres.map(genre => genre.name).join(', ');
      const year = obj['release_date'].split('-')[0];
      const score = Math.ceil(obj['vote_average'] * 10);
      const newData = {
        img: `https://image.tmdb.org/t/p/w500/${obj['poster_path']}`,
        title: obj.title,
        genres,
        year,
        score,
        overview: obj.overview,
      };
      setData(newData);
      setStatusPage(status.FINISH);
    };

    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.id(movieId);
        dataConversion(response);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
  }, [location.state?.from,movieId]);

  return (
    <Section>
      {statusPage === status.FINISH && (
        <>
          <Link to={locRef.current} className={css.btnBack}>
            {`<--Go to back`}
          </Link>
          <DetailsMovie data={data} />
          <div>
            <h3 className={css.subtitleAdd}>Additional information</h3>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink to={'cast'} className={css.linkAddIfo}>
                  Cast
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to={'reviews'} className={css.linkAddIfo}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
      {statusPage === status.LOADING && <MovieDetailsSkeleton />}
      {statusPage === status.EROR && <p>Eror</p>}
    </Section>
  );
};

export default MovieDetails;