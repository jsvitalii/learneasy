import React from 'react';
import './CourseSection.scss';
import Course from '../Course/Course';
import useCourses from '../../hooks/useCourses';

const CourseSection = () => {
  const [courses] = useCourses();

  return (
    <div className="course-section">
      <div className="container">
        <div className="header-text">
          <h3>Популярні Курси</h3>
          <p>Знайди свою ідеальну програму на наших курсах.</p>
        </div>
        <div className="row">
          {courses.slice(0, 6).map((course) => (
            <Course course={course} key={course._id}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
