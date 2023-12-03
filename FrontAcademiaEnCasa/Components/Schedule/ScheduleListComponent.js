import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ScheduleComponent from './ScheduleComponent';

const ScheduleListComponent = ({ schedules }) => {
  return (
    <FlatList style={styles.containerList}
      data={schedules}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ScheduleComponent schedule={item} />}
    />
  );
};

const styles = StyleSheet.create({
  containerList: {
    width: '100%',
    padding: 10
  },
});


export default ScheduleListComponent;
