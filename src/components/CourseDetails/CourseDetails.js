import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faClock,
  faBookReader,
  faLanguage,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import './CourseDetails.scss';
import useCourses from '../../hooks/useCourses';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SyncLoader from 'react-spinners/SyncLoader';

const CourseDetails = () => {
  const [courses, loading] = useCourses();
  const [details, setDetails] = useState({});
  const { handleSubmit, reset } = useForm();
  const { courseId } = useParams();
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (courses.length) {
      const matchedData = courses.find((course) => course._id === courseId);
      setDetails(matchedData);
    }
  }, [courses]);

  const {
    title,
    category,
    duration,
    lesson,
    price,
    image,
    description,
    instructor,
    instructorImage,
    language,
  } = details;

  const onSubmit = (data) => {
    data.image = image;
    data.title = title;
    data.price = price;
    data.email = user.email;
    data.quantity = 1;

    fetch(`https://learneasy.onrender.com/addCartOrder`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          history.push('/cart');
          reset();
        } else {
          history.push('/login');
        }
      });
    console.log(data);
  };

  if (loading)
    return (
      <div className="home-pre-loader">
        <div className="d-flex justify-content-center align-items-center">
          <SyncLoader
            className="syncloader"
            color={'#2f2d52'}
            loading={loading}
            size={20}
          />
        </div>
      </div>
    );

  return (
    <div className="details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="detail-box">
              <h3 className="title">{title}</h3>
              <p className="category">{category}</p>
              <div className="instructor">
                <div className="box">
                  <img src={instructorImage} alt="" />
                </div>
                <div className="box">
                  <h5>Автор</h5>
                  <p className="mb-0">{instructor}</p>
                </div>
              </div>
              <div className="bottom-area">
                <ul className="indicator">
                  <li className="active">Огляд</li>
                </ul>
                <div className="indicator-details">
                  <h4>Інформація Про Курс</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ps-lg-5">
            <div className="purchase-course-box">
              <div className="img-box">
                <img className="img-fluid" src={image} alt="" />
              </div>
              <div className="info-box">
                <h4 className="price">${price}</h4>
                {user?.email ? (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mb-0 text-start"
                  >
                    <button type="submit" className="btn-black">
                      купити цей курс
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => history.push('/login')}
                    className="btn-black"
                  >
                    купити цей курс
                  </button>
                )}
                <ul>
                  <li>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faClock} />
                      Тривалість
                    </span>
                    <span>{duration}</span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faBookOpen} />
                      уроків
                    </span>
                    <span>{lesson}</span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faLanguage} />
                      Мова
                    </span>
                    <span>{language}</span>
                  </li>
                  <li>
                    <span>
                      <FontAwesomeIcon className="icon" icon={faCertificate} />
                      Сертифікат
                    </span>
                    <span>Так</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
