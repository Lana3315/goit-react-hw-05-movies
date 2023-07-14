import { useState } from 'react';
import api from '../../services/api';
import css from './FormSearch.module.css';
import status from '../../services/status';
import PropTypes from 'prop-types';

const FormSearch = ({ setStatusPage, setData, setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    setQuery(e.target.value.trimStart());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
    setSearchParams({ query });

    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.search(query, 1);
        setData(response.results);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChangeInput}
        className={css.input}
      />
      <button type="submit" className={css.btn}>Search</button>
    </form>
  );
};

export default FormSearch;

FormSearch.propTypes = {
  setStatusPage: PropTypes.func,
  setData: PropTypes.func,
  setSearchParams: PropTypes.func,
};