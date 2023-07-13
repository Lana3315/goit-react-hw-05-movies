import {NavLink, Outlet } from 'react-router-dom'
export const Layout = () => {
  return (
    <>
      <header>
    <ul>
       <li> <NavLink to="/">Home page</NavLink></li>
       <li> <NavLink to="/movies">Collection</NavLink></li>
        </ul>
        </header>
      <main>
        <Outlet />
        </main>
      </>
  )
}
export default Layout;
 
