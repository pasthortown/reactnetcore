import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Home = ({ navigation }) => {
  const user = {
    id: '1264-asdf-5862-ergd-1236',
    name: 'Luis Alfonso',
    email: 'luis@example.com',
    last_course: { name: 'Física', date: { month: 11, day: 30, year: 2023, hour: 12, minute: 30 } },
    next_course: { name: 'Matemáticas', date: { month: 12, day: 15, year: 2023, hour: 18, minute: 30 } }
  };

  return (
    <ImageBackground
      source={require('./../../assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Academia en Casa</Text>
        </View>

        <View style={styles.userContainer}>
          <Text style={styles.holaText}>Hola</Text>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        <View style={styles.coursesContainer}>
          <View style={styles.courseSection}>
            <Text style={styles.sectionLabel}>Última clase</Text>
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{user.last_course.name}</Text>
              <Text style={styles.courseDate}>{formatDate(user.last_course.date)}</Text>
            </View>
          </View>

          <View style={styles.courseSection}>
            <Text style={styles.sectionLabel}>Siguiente clase</Text>
            <View style={styles.courseInfo}>
              <Text style={styles.courseName}>{user.next_course.name}</Text>
              <Text style={styles.courseDate}>{formatDate(user.next_course.date)}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <FontAwesome5 name="user" solid style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Courses')}
          >
            <FontAwesome5 name="book" solid style={styles.icon} />
            <Text style={styles.buttonText}>Cursos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Calendar')}
          >
            <FontAwesome5 name="calendar" solid style={styles.icon} />
            <Text style={styles.buttonText}>Calendario</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('History')}
          >
            <FontAwesome5 name="history" solid style={styles.icon} />
            <Text style={styles.buttonText}>Historial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const formatDate = (date) => {
  const { month, day, year, hour, minute } = date;
  return `${month}/${day}/${year} ${hour}:${minute}`;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'left',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 150,
  },
  holaText: {
    fontSize: 30,
    color: 'white',
  },
  userName: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  userEmail: {
    fontSize: 16,
    color: 'white',
  },
  coursesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  courseSection: {
    alignItems: 'flex-start',
  },
  sectionLabel: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  courseInfo: {
    alignItems: 'center',
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  courseDate: {
    fontSize: 16,
    color: 'white',
  },
  profileButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'brown',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
  icon: {
    fontSize: 20,
    color: 'white',
  },
});

export default Home;
