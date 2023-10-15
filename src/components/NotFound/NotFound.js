import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';
import notFound from '../../images/undraw_Taken_re_yn20.svg';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container text-center">
        <img className="img-fluid" src={notFound} alt="" />
        <h3>Сторінка не знайдена</h3>
        <Link to="/home">На головну</Link>
      </div>
    </div>
  );
};

export default NotFound;
