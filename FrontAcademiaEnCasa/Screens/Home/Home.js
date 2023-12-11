import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';
import User from '../../Models/User';

const Home = ({ navigation }) => {
  const last_course = { name: 'Física', date: { month: 11, day: 30, year: 2023, hour: 12, minute: 30 } };
  const next_course = { name: 'Matemáticas', date: { month: 12, day: 15, year: 2023, hour: 18, minute: 30 } };

  const user = new User('1264-asdf-5862-ergd-1236', 'Luis Alfonso', '1234567890', '0912345678', 'luis@example.com', 'Calle 1 y Calle 2 lote 3', last_course, next_course);

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
            size={200}
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.darkOverlay} />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Academia en Casa</Text>
          </View>

          <View style={styles.userContainer}>
            <Text style={styles.holaText}>Hola</Text>
            <Text style={styles.userName}>{user.fullName}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>

          <View style={styles.coursesContainer}>
            <View style={styles.courseSection}>
              <Text style={styles.sectionLabel}>Última clase</Text>
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>{user.lastCourse.name}</Text>
                <Text style={styles.courseDate}>{formatDate(user.lastCourse.date)}</Text>
              </View>
            </View>

            <View style={styles.courseSection}>
              <Text style={styles.sectionLabel}>Siguiente clase</Text>
              <View style={styles.courseInfo}>
                <Text style={styles.courseName}>{user.nextCourse.name}</Text>
                <Text style={styles.courseDate}>{formatDate(user.nextCourse.date)}</Text>
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
              <Text style={styles.buttonText}>Agenda</Text>
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
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
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
    alignItems: 'center',
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
