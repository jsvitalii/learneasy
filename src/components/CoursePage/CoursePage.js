import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import SyncLoader from 'react-spinners/SyncLoader';

const CoursePage = () => {
  const [courses, loading] = useCourses();

  return (
    <div className="courses course-page">
      <div className="container">
        <div className="header-text text-center mb-5">
          <h3>Курси</h3>
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
            courses.map((course) => (
              <Course course={course} key={course._id}></Course>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
