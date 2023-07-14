import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import css from './MovieDetails.module.css';

const MovieDetailsSkeleton = () => {
  return (
    <>
      <Skeleton width="100px" />
      <div className={css.wrap}>
        <Skeleton height="300px" width="200px" className={css.img} />
        <div>
          <Skeleton width="300px" />
          <Skeleton width="200px" />
          <Skeleton width="300px" />
          <Skeleton height="100px" width="500px" />
          <Skeleton width="200px" />
          <Skeleton width="400px" />
        </div>
      </div>
      <div>
        <Skeleton width="250px" />
        <ul className={css.list}>
          <li>
            <Skeleton width={70} height={30} />
          </li>
          <li>
            <Skeleton width={70} height={30} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieDetailsSkeleton;