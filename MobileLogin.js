import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

let figmaAssets = {};
try {
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
}

export default function MobileLogin({ navigation }) {
  const [fontsLoaded] = useFonts({
    Inter_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
    Inter_600: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    Inter_700: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Image
          source={figmaAssets['PorkyZentudio@2x_png'] || figmaAssets['PorkyZentudio_png'] || figmaAssets['PorkyZentudio_svg']}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.placeholderIcon} />
      </View>

      {/* Hero Section */}
      <View style={styles.heroImageWrap}>
        <Image
          source={figmaAssets['Mobile_Login@2x_png'] || figmaAssets['Mobile_Login_png'] || figmaAssets['Mobile_Login_svg']}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text style={[styles.joinTitle, { fontFamily: 'Inter_700', color: '#91D6D6' }]}>Join the ZenStudio Community</Text>
        <Text style={[styles.joinCopy, { fontFamily: 'Inter_400', color: '#fff' }]}>Take the first step towards a healthier, more vibrant you.{"\n"}Sign up or log in to access personalized training plans, group classes, and wellness programs tailored to your goals.</Text>
      </View>

      {/* Sign Up Section */}
      <View style={styles.signupRow}>
        <View style={[styles.card, { borderColor: '#5B30AF', backgroundColor: '#91D6D6' }]}> 
          <Text style={[styles.formLabel, { fontFamily: 'Inter_400' }]}>Create Your Account</Text>
          <Text style={[styles.formLabel, { fontFamily: 'Inter_400' }]}>Email Address</Text>
          <Text style={[styles.formLabel, { fontFamily: 'Inter_400' }]}>Password</Text>
          <TouchableOpacity style={[styles.btnPrimary, { backgroundColor: '#5B30AF', marginTop: 8 }]}>
            <Text style={[styles.btnPrimaryText, { color: '#F5F5F5', fontFamily: 'Inter_400' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Log In Section */}
      <View style={styles.formRow}>
        <View style={[styles.card, { backgroundColor: '#5B30AF', borderColor: '#91D6D6' }]}> 
          <Text style={[styles.formLabel, { fontFamily: 'Inter_600', color: '#fff', fontSize: 14 }]}>Log In</Text>
          <Text style={[styles.formLabel, { fontFamily: 'Inter_400', color: '#fff' }]}>Email Address</Text>
          <Text style={[styles.formLabel, { fontFamily: 'Inter_400', color: '#fff' }]}>Password</Text>
          <TouchableOpacity style={[styles.btnPrimary, { backgroundColor: '#91D6D6', marginTop: 8 }]}>
            <Text style={[styles.btnPrimaryText, { color: '#000', fontFamily: 'Inter_400' }]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Section */}
      <View style={styles.infoWrap}>
        <Image
          source={figmaAssets['Mobile_Login@2x_png'] || figmaAssets['Mobile_Login_png'] || figmaAssets['Mobile_Login_svg']}
          style={styles.infoImage}
          resizeMode="cover"
        />
        <Text style={[styles.infoText, { fontFamily: 'Inter_600', color: '#A7F4F4' }]}>Log in to manage your classes, track progress, and stay connected with your fitness goals.</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { fontFamily: 'Inter_600' }]}>Contact Us{"\n"}© ZenStudio 2023, Empowering Wellness and Fitness for All.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 40 },
  topBar: { height: 64, backgroundColor: '#91D6D6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12 },
  logo: { width: 49, height: 46, borderRadius: 24 },
  placeholderIcon: { width: 24, height: 24, backgroundColor: '#1D1B20' },
  heroImageWrap: { backgroundColor: '#91D6D6', padding: 16, alignItems: 'center' },
  heroImage: { width: 394, height: 113, marginBottom: 8 },
  joinTitle: { color: '#91D6D6', fontSize: 14, fontWeight: '700', textAlign: 'center' },
  joinCopy: { color: '#fff', textAlign: 'center', fontSize: 12, fontWeight: '600', marginTop: 8 },
  formRow: { padding: 16, backgroundColor: '#5B30AF', alignItems: 'center' },
  card: { width: 114, height: 101, borderRadius: 10, borderWidth: 1, borderColor: '#91D6D6', padding: 8, alignItems: 'center', justifyContent: 'center' },
  formLabel: { color: '#000', fontSize: 12, marginBottom: 8 },
  btnPrimary: { backgroundColor: '#91D6D6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  btnPrimaryText: { color: '#000', fontSize: 16 },
  signupRow: { padding: 16, backgroundColor: '#91D6D6', alignItems: 'center' },
  formLabelAlt: { color: '#000', fontSize: 12, marginBottom: 8 },
  infoWrap: { padding: 16, alignItems: 'center' },
  infoImage: { width: 391, height: 261, marginBottom: 8 },
  infoText: { color: '#A7F4F4', fontSize: 12, textAlign: 'center' },
  footer: { padding: 12, alignItems: 'center' },
  footerText: { color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center' }
});
