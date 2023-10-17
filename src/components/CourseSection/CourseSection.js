import React from 'react';
import './CourseSection.scss';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses';
import SyncLoader from 'react-spinners/SyncLoader';

const CourseSection = () => {
  const [courses, loading] = useCourses();

  return (
    <div className="course-section">
      <div className="container">
        <div className="header-text">
          <h3>Популярні Курси</h3>
          <p>Знайди свою ідеальну програму на наших курсах.</p>
        </div>
        <div className="row">
          {loading && (
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
              <SyncLoader
                className="syncloader"
                color={'#2f2d52'}
                loading={loading}
                size={20}
              />
            </div>
          )}
          {!loading &&
            courses
              .slice(0, 6)
              .map((course) => (
                <Course course={course} key={course._id}></Course>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
