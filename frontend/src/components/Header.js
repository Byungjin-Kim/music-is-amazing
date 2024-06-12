import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
     
         <Logo>Music Is Amazing</Logo>
         <Nav>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#musicInsight'>Music Insight</a></li>        
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </Nav>

        </HeaderWrapper>
    );
}

export default Header;