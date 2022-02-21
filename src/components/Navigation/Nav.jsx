import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
  margin: 20px;
`;
export const Nav = () => {
  return (
    <>
      <nav>
        <Link to="home">Home</Link>
        <Link to="pictures">Pictures</Link>
      </nav>
      <Outlet />
    </>
  );
};
