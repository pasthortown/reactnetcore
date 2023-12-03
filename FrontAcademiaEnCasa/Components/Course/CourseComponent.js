import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseComponent = ({ course }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Course ID:</Text>
      <Text style={styles.value}>{course.id}</Text>

      <Text style={styles.label}>Course Name:</Text>
      <Text style={styles.value}>{course.name}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{course.description}</Text>

      <Text style={styles.label}>Cost Per Hour:</Text>
      <Text style={styles.value}>${course.costPerHour}</Text>

      <Text style={styles.label}>Teacher ID:</Text>
      <Text style={styles.value}>{course.teacherId}</Text>

      <Text style={styles.label}>Teacher Email:</Text>
      <Text style={styles.value}>{course.teacherEmail}</Text>

      <Text style={styles.label}>Teacher Name:</Text>
      <Text style={styles.value}>{course.teacherName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CourseComponent;
