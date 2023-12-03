import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CourseComponent from './CourseComponent';

const CourseListComponent = ({ courses }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CourseComponent course={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CourseListComponent;
