import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import hamburger from '../../images/menu2.png';
import userIcon from '../../images/user.png';
import cartIcon from '../../images/shopping-bag.png';
import logoutIcon from '../../images/logout.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container">
        <Link className="link" to="/home">
          <h3 className="logo">LearnEasy</h3>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="link" to="/home">
                Головна
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/courses">
                Курси
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/about">
                Про нас
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/contact">
                Контакти
              </Link>
            </li>
          </ul>
        </div>
        <ul className="user-cart">
          {user?.email ? (
            <li className="nav-item">
              <span onClick={logOut} className="link">
                <img src={logoutIcon} alt="" />
              </span>
            </li>
          ) : (
            <li>
              <Link className="link" to="/login">
                <img src={userIcon} alt="" />
              </Link>
            </li>
          )}
          <li>
            <Link className="link" to="/cart">
              <img src={cartIcon} alt="" />
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img className="hamburger" src={hamburger} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
