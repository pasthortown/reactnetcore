import React from 'react';
import { Button } from 'react-native';
import Backend from '../../Services/Backend';
import Course from './Course';

const CourseList = ({courses}) => {
  const manejarPresionBoton = async () => {
    let backend = new Backend();
    try {
      let datos = await backend.getStudent();
      console.log(datos);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Cursos</h1>
      <div>
      <h2>Lista de Cursos</h2>
        {courses.map((course, index) => (
          <Course key={index} name={course.name} grade={course.grade} />
        ))}
      </div>
      <Button title="Mostrar Alerta" onPress={manejarPresionBoton} />
    </div>
  );
};

export default CourseList;
