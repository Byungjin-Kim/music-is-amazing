import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #175b0a;
  padding: 1rem;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.2;
  margin-left: 3rem;
`;

const MusicLine = styled.div`
  display: block;
  font-size: 2rem; 
  font-weight: bold;
`;

const IsAmazingLine = styled.div`
  display: block;
  font-size: 1.2rem; 
`;

const Nav = styled.nav`
 margin-right: 3rem;
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    padding: 0;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
         <Logo>
            <MusicLine>Music</MusicLine>
            <IsAmazingLine>Is Amazing</IsAmazingLine>
            </Logo>
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