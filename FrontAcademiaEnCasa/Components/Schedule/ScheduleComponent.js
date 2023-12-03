import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScheduleComponent = ({ schedule }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Schedule ID:</Text>
      <Text style={styles.value}>{schedule.id}</Text>

      <Text style={styles.label}>Duration:</Text>
      <Text style={styles.value}>{schedule.duration}</Text>

      <Text style={styles.label}>Schedule Date and Time:</Text>
      <Text style={styles.value}>{schedule.scheduleDateTime}</Text>

      <Text style={styles.label}>Course ID:</Text>
      <Text style={styles.value}>{schedule.courseId}</Text>

      <Text style={styles.label}>Teacher ID:</Text>
      <Text style={styles.value}>{schedule.teacherId}</Text>

      <Text style={styles.label}>Student ID:</Text>
      <Text style={styles.value}>{schedule.studentId}</Text>

      <Text style={styles.label}>Course Name:</Text>
      <Text style={styles.value}>{schedule.courseName}</Text>

      <Text style={styles.label}>Course Description:</Text>
      <Text style={styles.value}>{schedule.courseDescription}</Text>

      <Text style={styles.label}>Cost Per Hour:</Text>
      <Text style={styles.value}>${schedule.courseCostPerHour}</Text>

      <Text style={styles.label}>Teacher Name:</Text>
      <Text style={styles.value}>{schedule.teacherName}</Text>

      <Text style={styles.label}>Student Name:</Text>
      <Text style={styles.value}>{schedule.studentName}</Text>
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

export default ScheduleComponent;
