import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScheduleListComponent from '../../Components/Schedule/ScheduleListComponent';
import Schedule from '../../Models/Schedule';

const Calendar = () => {
  
  const screenWidth = Dimensions.get('window').width;

  const schedule1 = new Schedule(
    1,
    'virtual',
    'https://www.google.com/',
    2,
    { month: 12, day: 15, year: 2023, hour: 18, minute: 30 },
    'course123',
    'teacher123',
    'student123',
    'React Native Basics',
    'Learn the fundamentals of React Native development.',
    20,
    'John Doe',
    'john@example.com',
    'Alice Johnson',
    'alice@example.com',
    false
  );
  
  const schedule2 = new Schedule(
    2,
    'presencial',
    'Calle 1 y Calle 2 lote 3',
    1.5,
    { month: 11, day: 10, year: 2023, hour: 12, minute: 30 },
    'course456',
    'teacher456',
    'student456',
    'JavaScript Fundamentals',
    'Introduction to core concepts of JavaScript.',
    15,
    'Jane Smith',
    'jane@example.com',
    'Bob Anderson',
    'bob@example.com',
    false
  );

  const schedules = [ schedule1, schedule2 ];

  return (
    <ImageBackground
      source={require('./../../assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.darkOverlay} />

        <View style={styles.container}>
          <Text style={styles.text}>Próximas Actividades</Text>
          <ScheduleListComponent schedules={schedules} />
          
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, { width: screenWidth * 0.25 }]}
              onPress={() => navigation.navigate('Home')}
            >
              <FontAwesome5 name="check" solid style={styles.icon} />
              <Text style={styles.buttonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20, // Añadido para espaciar el contenido del ScrollView desde la parte superior
  },
  text: {
    fontSize: 20,
    top: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Añadido para que el texto sea blanco
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 5,
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Calendar;
