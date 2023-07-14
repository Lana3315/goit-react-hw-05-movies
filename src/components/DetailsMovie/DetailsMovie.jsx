import css from './DetailsMovie.module.css';

const DetailsMovie = ({ data }) => {
  return (
    <div className={css.wrap}>
      <img src={data.img} alt={data.title} height="300" width="200" className={css.img} />
      <div className={css.info}>
        <h2 className={css.title}>
          {data.title}
          <span className={css.year}>({data.year})</span>
        </h2>
        <p className={css.score}>
          User Score: <b>{data.score}%</b>{' '}
        </p>
        <h3 className={css.subtitle}>Overview</h3>
        <p>{data.overview}</p>
        <h3 className={css.subtitle}>Genres</h3>
        <p>{data.genres}</p>
      </div>
    </div>
  );
};
export default DetailsMovie;