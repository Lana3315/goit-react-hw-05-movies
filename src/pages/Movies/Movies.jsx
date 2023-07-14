import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import ListSkeleton from '../../components/List/ListSkeleton';
import status from '../../services/status';
import api from 'services/api';
import FormSearch from '../../components/FormSearch/FormSearch';
import List from '../../components/List/List';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [statusPage, setStatusPage] = useState(status.START);

  const queryURL = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryURL === '') return;
    setPage(1);
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.search(queryURL, page);
        setData(response.results);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
      }
    };
    fetch();
  }, [page,queryURL]);

  return (
    <Section>
      <FormSearch
        setStatusPage={setStatusPage}
        setData={setData}
        setSearchParams={setSearchParams}
      />
      {statusPage === status.FINISH && data.length !== 0 && queryURL !== '' && (
        <p className={css.title}>Search result: {queryURL}</p>
      )}
      {statusPage === status.FINISH && data.length === 0 && (
        <p className={css.title}>Your request was not found: {queryURL}</p>
      )}
      {statusPage === status.FINISH && data.length !== 0 && queryURL !== '' && (
        <List data={data} isHome={false} />
      )}
      {statusPage === status.LOADING && <ListSkeleton />} 
      {statusPage === status.EROR && <p className={css.title}>Erorr</p>}
    </Section>
  );
};

export default Movies;