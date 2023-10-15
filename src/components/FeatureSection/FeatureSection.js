import React from 'react';
import './FeatureSection.scss';
import icon1 from '../../images/ebook.png';
import icon2 from '../../images/ring.png';
import icon3 from '../../images/book.png';

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="container">
        <div className="header-text text-center">
          <h3>Навіщо вчитися з LearnEasy</h3>
          <p>Знайди свою ідеальну програму на наших курсах.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-box">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
              <h5>Вивчайте Будь-що</h5>
              <p>
                Асортимент курсів з програмування, <br /> дизайну та більше.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <div className="icon icon2">
                <img src={icon2} alt="" />
              </div>
              <h5>Гнучке Навчання</h5>
              <p>
                Можливість проходити курси будь-де <br /> та будь-коли.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <div className="icon icon3">
                <img src={icon3} alt="" />
              </div>
              <h5>Навчайся З Експертами</h5>
              <p>
                Експерти надають вам найкращу підтримку <br /> відповідно ваших
                потреб.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
