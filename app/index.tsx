import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/onboard.png')}
        resizeMode='cover'
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => { router.push('/(auth)/signin') }}
          >
            <Text style={styles.buttonText}>
                Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00BFA6',
    // backgroundColor: '#1E90FF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '75%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
