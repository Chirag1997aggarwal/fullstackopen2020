import React from 'react';
import Content from './Content'

const Header = ({heading}) => <h3>{heading}</h3>

const Course = ({courses}) => {
  return(
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => 
        <section key={course.id}>
          <Header heading={course.name}/>
          <Content parts={course.parts} />
        </section>
      )}
    </>
  )
}

export default Course;