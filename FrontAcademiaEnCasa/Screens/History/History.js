import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import StudentList from '../../Components/Student/StudentList';

const History = ({ navigation }) => {
  const students = [ 
    {name: 'Luis', grade: 'A'},
    {name: 'Belen', grade: 'B'},
    {name: 'Andres', grade: 'C'},
  ];
  return (
    <ImageBackground
      source={require('./../../assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <View>
        <Text>Pantalla de Inicio</Text>
        <StudentList students={students}/>
        <Button
          title="Ir a Nueva Actividad"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // O 'contain' para que la imagen no se estire
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Color del texto
  },
});
export default History;
