import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CourseComponent from './CourseComponent';

const CourseListComponent = ({ courses }) => {
  return (
    <FlatList style={styles.containerList}
      data={courses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CourseComponent course={item} />}
    />
  );
};

const styles = StyleSheet.create({
  containerList: {
    width: '100%',
    padding: 10
  },
});

export default CourseListComponent;
