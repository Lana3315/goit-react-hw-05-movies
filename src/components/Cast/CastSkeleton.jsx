import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import css from './Cast.module.css';

const data = Array(6).fill(null);

const CastSkeleton = () => {
  return (
    <ul className={css.list}>
      {data.map((el, idx) => (
        <li key={idx} className={css.item}>
          <Skeleton width="200px" height="300px" />
          <div className={css.info}>
            <p>
              <Skeleton />
            </p>
            <p>
              <Skeleton />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default CastSkeleton;