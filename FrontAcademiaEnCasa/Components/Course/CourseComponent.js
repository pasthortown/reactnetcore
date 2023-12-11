import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const CourseComponent = ({ course }) => {

  const [isDialogVisible, setDialogVisible] = useState(false);

  const toggleDialog = () => {
    setDialogVisible(!isDialogVisible);
  };

  const handleMainViewPress = () => {
    toggleDialog();
  };

  return (
    <TouchableOpacity
      style={styles.courseContainer}
      onPress={() => toggleDialog()}
    >
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseDescription}>{course.description}</Text>
      <Text style={styles.teacherName}>{`Profesor: ${course.teacherName}`}</Text>
      <Text style={styles.teacherEmail}>{`Email: ${course.teacherEmail}`}</Text>
      <Text style={styles.costPerHour}>{`Costo: $${course.costPerHour} cada hora`}</Text>
      <Modal isVisible={isDialogVisible}>
        <View style={styles.dialogContainer}>
          <Text style={styles.dialogTitle}>Título del Diálogo</Text>
          {/* Contenido del diálogo */}
          <TouchableOpacity
            style={styles.dialogButton}
            onPress={toggleDialog}
          >
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 10,
  },
  teacherName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  teacherEmail: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 10,
  },
  costPerHour: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'right',
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'blue', // Puedes cambiar el color según tus preferencias
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CourseComponent;
