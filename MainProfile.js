import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

let figmaAssets = {};
try {
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
}

export default function MainProfile() {
  const [fontsLoaded] = useFonts({
    Quicksand_600: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    Quicksand_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
    Inter_700: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    Inter_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.root}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.profileTitle}>Profile</Text>
        <View style={styles.menuIcon} />
      </View>

      {/* User Card */}
      <View style={styles.userCard}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>JW</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Wicke</Text>
          <Text style={styles.userTitle}>The BabaYoga</Text>
          <Text style={styles.userEmail}>johnwicke@continental.com</Text>
          <Text style={styles.userPhone}>+64 022 123 4567</Text>
        </View>
      </View>

      {/* Info Cards Row 1 */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Image source={figmaAssets['Personalized_svg'] || require('../../assets/Personalized.svg')} style={styles.infoIcon} />
          <Text style={styles.infoCardTitle}>Personalized Training</Text>
          <Text style={styles.infoCardDesc}>Work one-on-one with expert trainers who focus on your unique fitness goals.</Text>
        </View>
        <View style={styles.infoCard}>
          <Image source={figmaAssets['Dynamic_Small_svg'] || require('../../assets/Dynamic Small.svg')} style={styles.infoIcon} />
          <Text style={styles.infoCardTitle}>Dynamic Group Classes</Text>
          <Text style={styles.infoCardDesc}>Join engaging group sessions that keep you motivated and energized.</Text>
        </View>
      </View>
      {/* Info Cards Row 2 */}
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Image source={figmaAssets['Holistic_Small_svg'] || require('../../assets/Holistic Small.svg')} style={styles.infoIcon} />
          <Text style={styles.infoCardTitle}>Holistic Wellness Programs</Text>
          <Text style={styles.infoCardDesc}>Improve your overall health with yoga, meditation, and nutrition guidance.</Text>
        </View>
        <View style={styles.infoCard}>
          <Image source={figmaAssets['State_of_Art_Small_svg'] || require('../../assets/State of Art Small.svg')} style={styles.infoIcon} />
          <Text style={styles.infoCardTitle}>State-of-the-Art Equipment</Text>
          <Text style={styles.infoCardDesc}>Access modern facilities equipped with the latest fitness technology.</Text>
        </View>
      </View>

      {/* Achieve/Custom Plan Cards */}
      <View style={styles.goalRow}>
        <View style={styles.goalCard}>
          <Text style={styles.goalTitle}>Achieve Your Goals</Text>
          <Text style={styles.goalDesc}>Track your progress and celebrate milestones with continuous support.</Text>
        </View>
        <View style={styles.goalCard}>
          <Text style={styles.goalTitle}>Create Your Custom Plan</Text>
          <Text style={styles.goalDesc}>Work with our trainers to develop a tailored program that fits your lifestyle.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#5B30AF' },
  topBar: { height: 90, backgroundColor: '#91D6D6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24 },
  profileTitle: { fontFamily: 'Quicksand_600', fontSize: 24, color: '#000', fontWeight: '600' },
  menuIcon: { width: 24, height: 24, backgroundColor: '#1D1B20', borderRadius: 6 },
  userCard: { flexDirection: 'row', backgroundColor: '#91D6D6', borderRadius: 12, marginHorizontal: 29, marginTop: 19, height: 131, alignItems: 'center', paddingHorizontal: 20 },
  avatarCircle: { width: 77, height: 76, borderRadius: 38, backgroundColor: '#5B30AF', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontFamily: 'Quicksand_600', fontSize: 20, color: '#000', fontWeight: '600', textAlign: 'center' },
  userInfo: { marginLeft: 15, flex: 1 },
  userName: { fontFamily: 'Quicksand_600', fontSize: 16, color: '#000', fontWeight: '400' },
  userTitle: { fontFamily: 'Quicksand_600', fontSize: 16, color: '#000', fontWeight: '400' },
  userEmail: { fontFamily: 'Quicksand_400', fontSize: 16, color: '#000', fontWeight: '400' },
  userPhone: { fontFamily: 'Quicksand_400', fontSize: 16, color: '#000', fontWeight: '400' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 30 },
  infoCard: { width: 160, height: 160, backgroundColor: '#91D6D6', borderRadius: 12, alignItems: 'center', padding: 10 },
  infoIcon: { width: 23, height: 23, borderRadius: 12, marginTop: 5, marginBottom: 5 },
  infoCardTitle: { fontFamily: 'Inter_700', fontSize: 12, color: '#000', fontWeight: '700', textAlign: 'center', marginTop: 10 },
  infoCardDesc: { fontFamily: 'Inter_400', fontSize: 12, color: '#000', textAlign: 'center', marginTop: 4 },
  goalRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginTop: 30 },
  goalCard: { width: 145, height: 67, backgroundColor: '#fff', borderRadius: 12, alignItems: 'center', justifyContent: 'center', padding: 8 },
  goalTitle: { fontFamily: 'Inter_600', fontSize: 11, color: '#000', fontWeight: '600', textAlign: 'center' },
  goalDesc: { fontFamily: 'Inter_400', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 },
});
