import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const formatDate = (date) => {
  const { month, day, year, hour, minute } = date;
  return `${month}/${day}/${year} ${hour}:${minute}`;
};

const ScheduleComponent = ({ schedule }) => {

  const handleLinkPress = () => {
    Linking.openURL(schedule.scheduleAddress);
  };
 
  return (
    <View style={styles.scheduleContainer}>
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
    </View>
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
});

export default ScheduleComponent;
