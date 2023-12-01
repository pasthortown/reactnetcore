import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';

const Home = ({ navigation }) => {

  const user = {
    id: '1264-asdf-5862-ergd-1236',
    name: 'Luis Alfonso',
    email: 'luis@example.com',
    last_course: { name: 'Física', date: { month: 11, day: 30, year: 2023, hour: 12, minute: 30 } },
    next_course: { name: 'Matemáticas', date: { month: 12, day: 15, year: 2023, hour: 18, minute: 30 } }
  };

  const [isQRDialogVisible, setQRDialogVisible] = useState(false);
  const [qrContent, setQRContent] = useState('');

  const toggleQRDialog = () => {
    setQRDialogVisible(!isQRDialogVisible);
  };

  const handleQRContentChange = (text) => {
    setQRContent(text);
  };

  const renderQRDialog = () => (
    <Modal isVisible={isQRDialogVisible}>
      <View style={styles.dialogContainer}>
        <Text style={styles.dialogTitle}>Tu código QR</Text>
        <View style={styles.qrContainer}>
          <QRCode
            value={user.id}
            size={300}
          />
        </View>
        <TouchableOpacity
          style={styles.dialogButton}
          onPress={toggleQRDialog}
        >
          <Text style={styles.buttonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  const formatDate = (date) => {
    const { month, day, year, hour, minute } = date;
    return `${month}/${day}/${year} ${hour}:${minute}`;
  };

  return (
    <ImageBackground
      source={require('./../../assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.darkOverlay} />
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
          style={styles.qrbutton}
          onPress={toggleQRDialog}
        >
          <FontAwesome5 name="qrcode" solid style={styles.icon} />
          <Text style={styles.buttonText}>Mi QR</Text>
        </TouchableOpacity>

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

      {renderQRDialog()}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    fontSize: 12,
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
  qrbutton: {
    position: 'absolute',
    top: '50%',
    right: 10,
    transform: [{ translateY: -25 }],
    width: 75,
    height: 75,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'brown',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',  // Centrar el contenido horizontalmente
    marginBottom: 10,      // Espacio de 10px en la parte inferior
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
  dialogContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dialogInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minHeight: 100,
  },
  dialogButton: {
    backgroundColor: 'brown',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Home;
