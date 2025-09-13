import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainClasses() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Main Classes Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5F5F5' },
  text: { fontSize: 20, color: '#5B30AF', fontWeight: 'bold' },
});

