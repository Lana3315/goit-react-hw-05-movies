import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import css from './Reviews.module.css';

const ReviewsSkeleton = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <p className={css.author}>
          Author: <Skeleton width={300} />
        </p>
        <p className={css.content}>
          <Skeleton height={100} />
        </p>
      </li>
      <li className={css.item}>
        <p className={css.author}>
          Author: <Skeleton width={300} />
        </p>
        <p className={css.content}>
          <Skeleton height={100} />
        </p>
      </li>
    </ul>
  );
};

export default ReviewsSkeleton;