import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavLink to="home" smooth={true} duration={500}>Home</NavLink>
        <NavLink to="about" smooth={true} duration={500}>About</NavLink>
        <NavLink to="portfolio" smooth={true} duration={500}>Portfolio</NavLink>
        <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: color 0.3s;

  &:hover {
    color: #00f2fe;
  }
`;

export default Navbar;
