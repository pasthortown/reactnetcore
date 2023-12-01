import React from 'react';
import { Button } from 'react-native';
import Backend from '../../Services/Backend';
import Teacher from './Teacher';

const TeacherList = ({teachers}) => {
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
      <h1>Profesores</h1>
      <div>
      <h2>Lista de Profesores</h2>
        {teachers.map((teacher, index) => (
          <Teacher key={index} name={teacher.name} grade={teacher.grade} />
        ))}
      </div>
      <Button title="Mostrar Alerta" onPress={manejarPresionBoton} />
    </div>
  );
};

export default TeacherList;
