import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const CoursePage = () => {
  const [courses] = useCourses();

  return (
    <div className="courses course-page">
      <div className="container">
        <div className="header-text text-center mb-5">
          <h3>Курси</h3>
          <p>Знайди свою ідеальну програму на наших курсах.</p>
        </div>
        <div className="row">
          {courses.map((course) => (
            <Course course={course} key={course._id}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
