import { Link, useLocation } from 'react-router-dom';
import css from './List.module.css';
import PropTypes from 'prop-types';

const List = ({ data, isHome }) => {
  const location = useLocation();
  const url = isHome ? 'movies/' : '';

  return (
    <ul className={css.list}>
      {data.map(el => (
        <li key={el.id} className={css.item}>
          <Link to={`${url}${el.id}`} state={{ from: location }} className={css.link}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array.isRequired,
  isHome: PropTypes.bool,
};