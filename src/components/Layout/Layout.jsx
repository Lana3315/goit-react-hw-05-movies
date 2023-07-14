import ListSkeleton from '../List/ListSkeleton';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.linkHome}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.linkMovies}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<ListSkeleton />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
