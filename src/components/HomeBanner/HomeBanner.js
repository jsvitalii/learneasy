import React from 'react';
import './HomeBanner.scss';
import homeBg from '../../images/illustration-4.webp';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="text-box">
              <h1>
                Почни проходити <span>Онлайн Курси</span>
              </h1>
              <p>Інвестиція в знання має найкращі відсотки.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={homeBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
