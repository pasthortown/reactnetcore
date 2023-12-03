import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ScheduleListComponent from '../../Components/Schedule/ScheduleListComponent';
import Schedule from '../../Models/Schedule';

const History = () => {
  
  const schedule1 = new Schedule(
    1,
    '2 hours',
    '2023-01-01T14:00:00',
    'course123',
    'teacher123',
    'student123',
    'React Native Basics',
    'Learn the fundamentals of React Native development.',
    20,
    'John Doe',
    'Alice Johnson'
  );
  
  const schedule2 = new Schedule(
    2,
    '1.5 hours',
    '2023-01-02T10:30:00',
    'course456',
    'teacher456',
    'student456',
    'JavaScript Fundamentals',
    'Introduction to core concepts of JavaScript.',
    15,
    'Jane Smith',
    'Bob Anderson'
  );
  const schedules = [ schedule1, schedule2 ];

  return (
    <View>
      <ScheduleListComponent schedules={schedules} />
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default History;
