import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import paymentGateway from '../../images/online-payment.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <h3 className="logo mb-3">LearnEasy</h3>
            <p>
              LearnEasy - це інноваційна освітня веб-система, створена для того,
              щоб навчання стало легким, цікавим і доступним для всіх.
            </p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h5>Навігація</h5>
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
          <div className="col-sm-6 col-lg-3">
            <h5>Координати</h5>
            <p>м. Київ</p>
            <p>0933333333</p>
            <p>support@support.com</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <img className="img-fluid" src={paymentGateway} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
