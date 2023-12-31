import React from 'react';
import './Course.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faClock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Course = (props) => {
  const { _id, title, category, image, lesson, price, duration } = props.course;
  const history = useHistory();

  const handleDetails = (id) => {
    const url = `/course/${id}`;
    history.push(url);
  };

  return (
    <div className="col-sm-6 col-lg-4 mx-auto">
      <div onClick={() => handleDetails(_id)} className="course-box shadow">
        <img className="img-fluid" src={image} alt="" />
        <div className="info">
          <p className="category">{category}</p>
          <h6 className="title">{title}</h6>
          <div className="d-flex justify-content-between">
            <span>
              <FontAwesomeIcon className="icon" icon={faBookOpen} /> {lesson}{' '}
              уроків
            </span>
            <span>
              <FontAwesomeIcon className="icon" icon={faClock} /> {duration}
            </span>
            <h5 className="price">${price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
