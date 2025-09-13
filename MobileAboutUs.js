import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

let figmaAssets = {};
try {
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
}

export default function MobileAboutUs() {
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
        <TouchableOpacity style={styles.loginBtn}><Text style={[styles.loginText, { fontFamily: 'Inter_400' }]}>Log In</Text></TouchableOpacity>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={figmaAssets['Mobile_About_Us@2x_png'] || figmaAssets['Mobile_About_Us_png'] || figmaAssets['Mobile_About_Us_svg']}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text style={[styles.heroTitle, { fontFamily: 'Inter_700', color: '#91D6D6' }]}>Transforming Lives Through Fitness{"\n"}About ZenStudio</Text>
        <Text style={[styles.heroCopy, { fontFamily: 'Inter_600' }]}>At ZenStudio, we believe in empowering individuals to achieve their best selves through personalized fitness and wellness solutions.{"\n\n"} Discover our story and the values that drive us.</Text>
        <Text style={[styles.heroCopy, { fontFamily: 'Inter_600', marginTop: 8 }]}>Empowering Wellness, Inspiring Change{"\n"}Our Mission and Vision</Text>
        <Text style={[styles.heroCopy, { fontFamily: 'Inter_400' }]}>ZenStudio is dedicated to creating a space where fitness meets mindfulness. Our mission is to inspire healthier lifestyles and foster a supportive community.</Text>
      </View>

      {/* Vision Statement */}
      <View style={styles.visionBox}>
        <Text style={[styles.visionText, { fontFamily: 'Inter_400' }]}>We envision a world where everyone can achieve their wellness goals with personalized training, group classes, and holistic programs tailored to their needs.{"\n\n"}Join us as we continue to innovate and redefine what a fitness studio can be.</Text>
        <TouchableOpacity style={styles.loginBtn}><Text style={[styles.loginText, { fontFamily: 'Inter_400' }]}>Log In</Text></TouchableOpacity>
      </View>

      {/* Journey Section */}
      <View style={styles.journeySection}>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Our Journey</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600' }]}>From humble beginnings to becoming a trusted fitness studio, explore the milestones that define ZenStudio.</Text>
        <Text style={[styles.journeyHeading, { fontFamily: 'Inter_700' }]}>Inception</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600' }]}>Idea and Concept Development{"\n"}Opening Our First Studio{"\n"}Building a Dedicated Community</Text>
        <Text style={[styles.journeyHeading, { fontFamily: 'Inter_700' }]}>Growth</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600' }]}>Launching Group Classes{"\n"}Expanding Wellness Programs{"\n"}Opening New Locations</Text>
        <Text style={[styles.journeyHeading, { fontFamily: 'Inter_700' }]}>Innovation</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600' }]}>Introducing Personalized Training{"\n"}Integrating Digital Fitness Tools{"\n"}Hosting Wellness Retreats</Text>
      </View>

      {/* Achievements Section */}
      <View style={styles.achievementsSection}>
        <Text style={[styles.achievementsHeading, { fontFamily: 'Inter_700' }]}>Our Achievements{"\n"}Driven by Passion, Fueled by Results</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600' }]}>ZenStudio has been recognized for our dedication to fitness and wellness, earning accolades and trust from our community.</Text>
        <View style={styles.achievementsRow}>
          <View style={styles.achievementBox}><Text style={[styles.achievementNum, { fontFamily: 'Inter_400' }]}>8+</Text><Text style={[styles.achievementLabel, { fontFamily: 'Inter_400' }]}>Years of Excellence</Text></View>
          <View style={styles.achievementBox}><Text style={[styles.achievementNum, { fontFamily: 'Inter_400' }]}>50+</Text><Text style={[styles.achievementLabel, { fontFamily: 'Inter_400' }]}>Awards Won</Text></View>
        </View>
        <View style={styles.achievementsRow}>
          <View style={styles.achievementBox}><Text style={[styles.achievementNum, { fontFamily: 'Inter_400' }]}>2,500+</Text><Text style={[styles.achievementLabel, { fontFamily: 'Inter_400' }]}>Classes Conducted</Text></View>
          <View style={styles.achievementBox}><Text style={[styles.achievementNum, { fontFamily: 'Inter_400' }]}>5,000+</Text><Text style={[styles.achievementLabel, { fontFamily: 'Inter_400' }]}>Happy Members</Text></View>
        </View>
        <Text style={[styles.achievementsSub, { fontFamily: 'Inter_600', marginTop: 12 }]}>Explore Our Services</Text>
      </View>

      {/* Team Section */}
      <View style={styles.teamSection}>
        <Text style={[styles.teamHeading, { fontFamily: 'Inter_700' }]}>Meet Our Team</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600' }]}>Our passionate trainers and wellness experts are here to guide  you on your fitness journey.{"\n\n"}Leslie Alexander{"\n"}Founder / CEO{"\n"}Toronto, Canada{"\n"}Jordan Silva{"\n"}Head Trainer{"\n"}New York, USA{"\n"}Casey Li{"\n"}Wellness Coach{"\n"}San Francisco, USA{"\n"}Alexa Richardson{"\n"}Nutrition Specialist{"\n"}London, UK</Text>
        <Text style={[styles.teamSub, { fontFamily: 'Inter_700', marginTop: 12 }]}>Our Community in Action</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Experience the energy and camaraderie of ZenStudio through our curated gallery.{"\n\n"}From group classes to personalized training sessions, see how our community thrives.</Text>
        <TouchableOpacity style={styles.communityBtn}><Text style={[styles.communityBtnText, { fontFamily: 'Inter_400' }]}>Community</Text></TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { fontFamily: 'Inter_600' }]}>Contact Us{"\n"}© ZenStudio 2023, Empowering Wellness and Fitness for All.{"\n"}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#91D6D6' },
  container: { paddingBottom: 40 },
  topBar: { height: 64, backgroundColor: '#91D6D6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12 },
  logo: { width: 49, height: 46, borderRadius: 24 },
  loginBtn: { backgroundColor: '#5B30AF', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  loginText: { color: '#F5F5F5', fontSize: 16 },
  hero: { padding: 16, alignItems: 'center' },
  heroImage: { width: 387, height: 91, marginBottom: 8 },
  heroTitle: { fontSize: 16, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  heroCopy: { color: '#000', fontSize: 12, textAlign: 'center', marginBottom: 4 },
  visionBox: { width: '100%', backgroundColor: '#91D6D6', padding: 16, alignItems: 'center', marginBottom: 8 },
  visionText: { color: '#000', fontSize: 12, textAlign: 'center', marginBottom: 8 },
  journeySection: { padding: 16, backgroundColor: '#5B30AF', marginBottom: 8 },
  journeyHeading: { color: '#000', fontSize: 16, fontWeight: '700', marginTop: 12, marginBottom: 2, textAlign: 'center' },
  achievementsSection: { width: '100%', backgroundColor: '#5B30AF', padding: 16, marginBottom: 8 },
  achievementsHeading: { color: '#000', fontSize: 16, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  achievementsRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
  achievementBox: { alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: '#91D6D6', padding: 8, minWidth: 100, margin: 4 },
  achievementNum: { fontSize: 16, fontWeight: '700', color: '#000' },
  achievementLabel: { fontSize: 12, color: '#000', textAlign: 'center' },
  achievementsSub: { color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center' },
  teamSection: { width: '100%', backgroundColor: '#91D6D6', padding: 16, marginBottom: 8 },
  teamHeading: { color: '#000', fontSize: 16, fontWeight: '700', textAlign: 'center', marginBottom: 4 },
  teamSub: { color: '#000', fontSize: 16, fontWeight: '700', textAlign: 'center', marginTop: 8 },
  communityBtn: { marginTop: 12, backgroundColor: '#5B30AF', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  communityBtnText: { color: '#F5F5F5', fontSize: 16 },
  footer: { padding: 12, backgroundColor: '#91D6D6', alignItems: 'center' },
  footerText: { color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#000', marginBottom: 6, textAlign: 'center' },
  p: { fontSize: 12, color: '#000', textAlign: 'center', marginBottom: 6 },
});
