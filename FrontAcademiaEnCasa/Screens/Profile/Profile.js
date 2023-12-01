import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nueva Actividad</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
      {/* Contenido de la nueva actividad */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Puedes personalizar el color de fondo aquí también
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Profile;
