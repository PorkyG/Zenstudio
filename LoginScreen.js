import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { colors, typography } from '../theme/designTokens';

export default function LoginScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Quicksand_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
    Quicksand_600: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  });

  if (!fontsLoaded) return <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}><ActivityIndicator size="large" color="#fff"/></View>;

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <Text style={[styles.title, typography.title]}>Zenfit Studio</Text>

      <View style={styles.inputLine} />
      <Text style={[styles.label, typography.inputLabel]}>Username</Text>
      <View style={styles.inputLine} />
      <Text style={[styles.label, typography.inputLabel]}>Password</Text>

      <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
        <Text style={[styles.loginText, typography.buttonText]}>Login</Text>
      </TouchableOpacity>

      <Text style={[styles.small, typography.small]}>Dont have an account?</Text>
      <Text style={[styles.joinNow, typography.joinNow]}>Join now</Text>
      <Text style={[styles.forgot, typography.forgot]}>Forgot Password</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 393,
    height: 889,
    backgroundColor: colors.primaryBackground,
  },
  title: {
    marginTop: 187,
    fontSize: 36,
    color: colors.text,
    fontWeight: '600',
  },
  inputLine: {
    width: 220,
    height: 0,
    borderTopWidth: 0.5,
    borderColor: '#000',
    marginTop: 20,
  },
  label: {
    marginTop: 12,
    color: colors.text,
  },
  loginButton: {
    width: 219,
    height: 31,
    marginTop: 20,
    backgroundColor: '#A7F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  loginText: {
    color: colors.text,
  },
  small: {
    position: 'absolute',
    left: 82,
    top: 850,
    color: colors.text,
  },
  joinNow: {
    position: 'absolute',
    left: 227,
    top: 844,
    color: colors.text,
  },
  forgot: {
    position: 'absolute',
    left: 152,
    top: 642,
    color: colors.text,
  },
});
