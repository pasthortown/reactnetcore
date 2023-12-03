import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseComponent = ({ course }) => {
  return (
    <View style={styles.courseContainer}>
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseDescription}>{course.description}</Text>
      <Text style={styles.teacherName}>{`Profesor: ${course.teacherName}`}</Text>
      <Text style={styles.teacherEmail}>{`Email: ${course.teacherEmail}`}</Text>
      <Text style={styles.costPerHour}>{`Costo: $${course.costPerHour} cada hora`}</Text>
    </View>
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
});

export default CourseComponent;
