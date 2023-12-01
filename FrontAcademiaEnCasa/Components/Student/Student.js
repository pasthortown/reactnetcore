import React from 'react';

const Student = ({ name, grade }) => {
  return (
    <div>
      <h3>Nombre: {name}</h3>
      <p>Grado: {grade}</p>
    </div>
  );
};

export default Student;
