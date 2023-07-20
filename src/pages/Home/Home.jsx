import {useState, useEffect } from "react";
import api from '../../services/api'
import status from '../../services/status'
import Section from '../../components/Section/Section';
import ListSkeleton from '../../components/List/ListSkeleton';
import List from '../../components/List/List';
import css from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [statusPage, setStatusPage] = useState(status.START);

  useEffect(() => {
    const fetch = async () => {
      setStatusPage(status.LOADING);
      try {
        const response = await api.trend(page);
        setData(response);
        setStatusPage(status.FINISH);
      } catch (error) {
        console.log(error);
        setStatusPage(status.EROR);
        setPage(1);
      }
    };
    fetch();
  }, [page]);

  return (
    <Section>
      <h1 className={css.title}>Trending today</h1>
      {statusPage === status.FINISH && <List data={data} isHome={true} />}
      {statusPage === status.LOADING && <ListSkeleton />} 
      {statusPage === status.EROR && <p>Erorr</p>}
    </Section>
  );
};

export default Home;
