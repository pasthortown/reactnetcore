import React from 'react';

const Teacher = ({ name, grade }) => {
  return (
    <div>
      <h3>Nombre: {name}</h3>
      <p>Grado: {grade}</p>
    </div>
  );
};

export default Teacher;
