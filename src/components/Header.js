import React from "react"
import styled from "styled-components"

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="images/home-icon.svg" alt="Home Icon" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="images/search-icon.svg" alt="Search Icon" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="images/watchlist-icon.svg" alt="Watchlist Icon" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="images/original-icon.svg" alt="Original Icon" />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <img src="images/movie-icon.svg" alt="Movies Icon" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="images/series-icon.svg" alt="Series Icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserProfile src="images/avatar.svg" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background: #090b13;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    color: white;
    padding: 0 12px;
    text-decoration: none;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`
const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`
