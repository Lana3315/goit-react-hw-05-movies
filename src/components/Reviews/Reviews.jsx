import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsSkeleton from './ReviewsSkeleton';
import status from '../../services/status';
import api from 'services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [data, setData] = useState([]);
  const [statusPage, setStatusPage] = useState(status.START);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.reviews(movieId);
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
    if (data.length === 0)
      return <p className={css.notInfo}>We don't have any reviews for this movie</p>;
    if (data.length !== 0) {
      return (
        <ul className={css.list}>
          {data.map((el, idx) => (
            <li className={css.item} key={idx}>
              <p className={css.author}>
                <b>Author: </b> {el.author}
              </p>
              <p className={css.content}>{el.content}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
  if (statusPage === status.LOADING) {
    return <ReviewsSkeleton />;
  }

  if (statusPage === status.EROR) {
    return <p>Eror...</p>;
  }
};

export default Reviews;