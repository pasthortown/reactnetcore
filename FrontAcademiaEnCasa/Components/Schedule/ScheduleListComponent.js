import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ScheduleComponent from './ScheduleComponent';

const ScheduleListComponent = ({ schedules }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ScheduleComponent schedule={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScheduleListComponent;
