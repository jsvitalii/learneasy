import React from 'react';
import aboutImg from '../../images/about-us.jpg';
import FeatureSection from '../FeatureSection/FeatureSection';
import './About.scss';

const About = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 pe-md-5 mb-5 mb-md-0">
              <img className="img-fluid shadow" src={aboutImg} alt="" />
            </div>
            <div className="col-md-6">
              <div className="about-info">
                <h3>Дізнайтесь Про Нас</h3>
                <p>
                  Ми пропонуємо найкращі міжнародні курси, щоб покращити ваші
                  навички.
                </p>
                <ul>
                  <li>Креативний Процес Навчання</li>
                  <li>Експрес Курси</li>
                  <li>Сертифікат Після Проходження</li>
                  <li>Практика З Реальними Проектами</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
    </>
  );
};

export default About;
