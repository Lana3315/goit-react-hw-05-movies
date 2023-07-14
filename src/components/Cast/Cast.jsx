import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import status from '../../services/status';
import api from '../../services/api';
import css from './Cast.module.css';
import CastSkeleton from './CastSkeleton';

const Cast = () => {
  const [data, setData] = useState([]);
  const [statusPage, setStatusPage] = useState(status.START);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.cast(movieId);
        setData(response);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
    
  }, [movieId]);

  if (statusPage === status.FINISH) {
    return (
      <ul className={css.list}>
        {data.map(el => (
          <li key={el.id} className={css.item}>
            {el['profile_path'] ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${el['profile_path']}`}
                alt={el.name}
                width="200px"
                height="300px"
              />
            ) : (
              <img
                src="https://dummyimage.com/200x300/faebd7/000000.jpg&text=photo+not+found"
                alt="notPhoto"
                width="200px"
                height="300px"
              />
            )}
            <div className={css.info}>
              <p>
                <b>Name: </b> {el.name}
              </p>
              <p>
                <b>Character: </b> {el.character}
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (statusPage === status.LOADING) {
    return <CastSkeleton />;
  }

  if (statusPage === status.LOADING) {
    return <p>Eror...</p>;
  }
};

export default Cast;