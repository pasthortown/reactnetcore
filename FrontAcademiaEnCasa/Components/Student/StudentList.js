import React from 'react';
import { Button } from 'react-native';
import Backend from '../../Services/Backend';
import Student from './Student';

const StudentList = ({students}) => {
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
      <h1>Estudiantes</h1>
      <div>
      <h2>Lista de Estudiantes</h2>
        {students.map((student, index) => (
          <Student key={index} name={student.name} grade={student.grade} />
        ))}
      </div>
      <Button title="Mostrar Alerta" onPress={manejarPresionBoton} />
    </div>
  );
};

export default StudentList;
