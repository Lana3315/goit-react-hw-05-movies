import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import css from './List.module.css';

const ListSkeleton = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
      <li className={css.item}>
        <Skeleton width={500} className={css.link} />
      </li>
    </ul>
  );
};

export default ListSkeleton;