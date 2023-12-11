import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const formatDate = (date) => {
  const { month, day, year, hour, minute } = date;
  return `${month}/${day}/${year} ${hour}:${minute}`;
};

const ScheduleComponent = ({ schedule }) => {

  const [isDialogVisible, setDialogVisible] = useState(false);

  const toggleDialog = () => {
    if (!schedule.disabled) {
      setDialogVisible(!isDialogVisible);
    }
  };

  const handleMainViewPress = () => {
    toggleDialog();
  };

  const handleLinkPress = () => {
    Linking.openURL(schedule.scheduleAddress);
  };
 
  return (
    <TouchableOpacity
      style={styles.scheduleContainer}
      onPress={() => toggleDialog()}
    >
      <Text style={styles.courseName}>{schedule.courseName}</Text>
      <Text style={styles.scheduleDateTime}>{`${formatDate(schedule.scheduleDateTime)} - (${schedule.duration} horas)`}</Text>
      <Text style={styles.courseDescription}>{schedule.courseDescription}</Text>
      <Text style={styles.personName}>{`Profesor: ${schedule.teacherName}`}</Text>
      <Text style={styles.personEmail}>{`Email: ${schedule.teacherEmail}`}</Text>
      <Text style={styles.personName}>{`Estudiante: ${schedule.studentName}`}</Text>
      <Text style={styles.personEmail}>{`Email: ${schedule.studentEmail}`}</Text>
      {schedule.scheduleMode === 'virtual' ? (
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.scheduleAddress}>{`Link: ${schedule.scheduleAddress}`}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.scheduleAddress}>{`Dirección: ${schedule.scheduleAddress}`}</Text>
      )}
      <Text style={styles.costPerHour}>{`Costo: $${schedule.courseCostPerHour * schedule.duration}`}</Text>
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
  scheduleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  scheduleDateTime: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  scheduleAddress: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 12,
    color: '#ffffff',
    marginBottom: 10,
  },
  personName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  personEmail: {
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

export default ScheduleComponent;
