import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CourseListComponent from '../../Components/Course/CourseListComponent';
import Course from '../../Models/Course';

const Courses = () => {
  
  const course1 = new Course(
    1,
    'React Native Basics',
    'Learn the fundamentals of React Native development.',
    20,
    'teacher123',
    'teacher@example.com',
    'John Doe'
  );
  
  const course2 = new Course(
    2,
    'JavaScript Fundamentals',
    'Introduction to core concepts of JavaScript.',
    15,
    'teacher456',
    'another.teacher@example.com',
    'Jane Smith'
  );

  const courses = [ course1, course2 ];

  return (
    <View>
      <CourseListComponent courses={courses} />
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Courses;
