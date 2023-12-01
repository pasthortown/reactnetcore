import React from 'react';

const Course = ({ name, grade }) => {
  return (
    <div>
      <h3>Nombre: {name}</h3>
      <p>Grado: {grade}</p>
    </div>
  );
};

export default Course;
