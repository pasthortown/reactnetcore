import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Profile = ({ navigation }) => {
  const [user, setUser] = useState({
    fullName: 'Luis Alfonso',
    identification: '1234567890',
    email: 'luis@example.com',
    phoneNumber: '0912340056',
    address: 'Calle 1 y Calle 2 lote 3',
  });

  const handleInputChange = (field, value) => {
    setUser(prevUser => ({ ...prevUser, [field]: value }));
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <ImageBackground
      source={require('./../../assets/background.jpeg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.darkOverlay} />

        <View style={styles.container}>
          <Text style={styles.text}>Edición del Perfil</Text>

          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={() => {
              // Agrega aquí la lógica para cambiar la foto de perfil
            }}
          >
            <ImageBackground
              source={require('./../../assets/profile.png')}
              style={styles.imageBackground}
            />
          </TouchableOpacity>

          <View style={styles.row}>
            <FloatingLabelInput
              label="Nombre Completo"
              value={user.fullName}
              onChangeText={text => handleInputChange('fullName', text)}
              containerStyles={styles.inputContainer}
              customLabelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={styles.row}>
            <FloatingLabelInput
              label="Identificación"
              value={user.identification}
              onChangeText={text => handleInputChange('identification', text)}
              containerStyles={[styles.inputContainer, { flex: 0.5 }]}
              customLabelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={styles.row}>
            <FloatingLabelInput
              label="Correo Electrónico"
              value={user.email}
              onChangeText={text => handleInputChange('email', text)}
              containerStyles={styles.inputContainer}
              customLabelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={styles.row}>
            <FloatingLabelInput
              label="Número de Teléfono Celular"
              value={user.phoneNumber}
              onChangeText={text => handleInputChange('phoneNumber', text)}
              containerStyles={[styles.inputContainer, { flex: 0.5, marginRight: 10 }]}
              customLabelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>

          <View style={styles.row}>
            <FloatingLabelInput
              label="Dirección"
              value={user.address}
              onChangeText={text => handleInputChange('address', text)}
              containerStyles={[styles.inputContainer, { borderBottomColor: 'brown' }]}
              customLabelStyles={styles.labelStyles}
              inputStyles={styles.inputStyles}
            />
          </View>
          
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
  profileImageContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'brown',
    borderRadius: 150,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    borderBottomColor: 'brown',
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 70,
  },
  labelStyles: {
    colorBlurred: 'white',
    colorFocused: 'white',
  },
  inputStyles: {
    fontSize: 20,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
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

export default Profile;
