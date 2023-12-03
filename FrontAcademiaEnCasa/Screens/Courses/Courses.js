import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CourseListComponent from '../../Components/Course/CourseListComponent';
import Course from '../../Models/Course';

const Courses = () => {
  
  const screenWidth = Dimensions.get('window').width;

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
    <ImageBackground
      source={require('./../../assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.darkOverlay} />

        <View style={styles.container}>
          <Text style={styles.text}>Cursos Disponibles</Text>
          <CourseListComponent courses={courses} />
          
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
    width: '100%',
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

export default Courses;
