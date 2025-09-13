
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

let figmaAssets = {};
try {
  // eslint-disable-next-line global-require
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
// ...existing code...

  const [fontsLoaded] = useFonts({
    Inter_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
    Inter_700: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      {/* Header / Hero */}
      <View style={styles.header}>
        <Image
          source={figmaAssets['Mobile_Classes_png'] || figmaAssets['Mobile_Classes_svg'] || require('../../assets/Mobile Classes.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.heroTextWrap}>
          <Text style={[styles.heroTitle, { fontFamily: 'Inter_700' }]}>Elite Personal Training Experience</Text>
          <Text style={[styles.heroSubtitle, { fontFamily: 'Inter_400' }]}>Transform your fitness journey with our expert personal trainers.{"\n"}Customized workout plans, nutritional guidance, and dedicated support to help you achieve your fitness goals.</Text>
        </View>
      </View>

      {/* Programs block */}
      <View style={styles.programsWrap}>
        <Text style={[styles.sectionBadge, { fontFamily: 'Inter_400' }]}>Program</Text>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Tailored Fitness Programs</Text>
        <Text style={[styles.sectionCopy, { fontFamily: 'Inter_400' }]}>Explore a variety of training options designed for all fitness levels. From personal coaching to group workouts, ZenStudio has the perfect program for you.</Text>

        <View style={styles.featuresRow}>
          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, { fontFamily: 'Inter_700' }]}>Personalized Training</Text>
            <Text style={[styles.featureCopy, { fontFamily: 'Inter_400' }]}>Work one-on-one with expert trainers who focus on your unique fitness goals.</Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, { fontFamily: 'Inter_700' }]}>Dynamic Group Classes</Text>
            <Text style={[styles.featureCopy, { fontFamily: 'Inter_400' }]}>Join engaging group sessions that keep you motivated and energized.</Text>
          </View>
        </View>

        <View style={styles.featuresRow}>
          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, { fontFamily: 'Inter_700' }]}>Holistic Wellness Programs</Text>
            <Text style={[styles.featureCopy, { fontFamily: 'Inter_400' }]}>Improve your overall health with yoga, meditation, and nutrition guidance.</Text>
          </View>
          <View style={styles.featureCard}>
            <Text style={[styles.featureTitle, { fontFamily: 'Inter_700' }]}>State-of-the-Art Equipment</Text>
            <Text style={[styles.featureCopy, { fontFamily: 'Inter_400' }]}>Access modern facilities equipped with the latest fitness technology.</Text>
          </View>
        </View>
      </View>

      {/* Join / Steps */}
      <View style={styles.joinWrap}>
        <Text style={[styles.joinBadge, { fontFamily: 'Inter_400' }]}>Join</Text>
        <View style={styles.stepsRow}>
          <View style={styles.stepCard}>
            <Text style={[styles.stepTitle, { fontFamily: 'Inter_700' }]}>Step 1</Text>
            <Text style={[styles.stepCopy, { fontFamily: 'Inter_600' }]}>Book Your Free Consultation</Text>
          </View>
          <View style={styles.stepCard}>
            <Text style={[styles.stepTitle, { fontFamily: 'Inter_700' }]}>Step 2</Text>
            <Text style={[styles.stepCopy, { fontFamily: 'Inter_600' }]}>Create Your Custom Plan</Text>
          </View>
          <View style={styles.stepCard}>
            <Text style={[styles.stepTitle, { fontFamily: 'Inter_700' }]}>Step 3</Text>
            <Text style={[styles.stepCopy, { fontFamily: 'Inter_600' }]}>Achieve Your Goals</Text>
          </View>
        </View>
      </View>

      {/* Group Class Schedule */}
      <View style={styles.scheduleWrap}>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Group Class Schedule</Text>
        <Text style={[styles.sectionCopyBold, { fontFamily: 'Inter_600' }]}>Find the perfect class for your fitness goals and schedule.</Text>
        <View style={styles.classList}>
          <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Yoga Flow — Sarah — Mon/Wed/Fri — 6:00 PM - 7:00 PM</Text>
          <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Cardio Blast — John — Tue/Thu — 7:00 AM - 8:00 AM</Text>
          <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Strength Training — Emma — Sat — 10:00 AM - 11:00 AM</Text>
        </View>
      </View>

      {/* Events & Workshops */}
      <View style={styles.eventsWrap}>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Upcoming Events & Workshops</Text>
        <Text style={[styles.sectionCopyBold, { fontFamily: 'Inter_600' }]}>Stay inspired with exclusive opportunities to learn and grow.</Text>
        <Text style={[styles.eventListTitle, { fontFamily: 'Inter_700' }]}>Workshops</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Nutrition Basics</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Mindfulness Meditation</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Strength Training Techniques</Text>

        <Text style={[styles.eventListTitle, { marginTop: 12, fontFamily: 'Inter_700' }]}>Events</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Yoga Retreat</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Fitness Challenge</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Community Wellness Day</Text>
      </View>

      {/* FAQ */}
      <View style={styles.faqWrap}>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Frequently Asked Questions</Text>
        <View style={styles.faqBox}><Text style={[styles.faqQ, { fontFamily: 'Inter_400' }]}>What classes do you offer?</Text></View>
        <View style={styles.faqBox}><Text style={[styles.faqQ, { fontFamily: 'Inter_400' }]}>Are there any discounts for memberships?</Text></View>
        <View style={styles.faqBox}><Text style={[styles.faqQ, { fontFamily: 'Inter_400' }]}>What is included in the membership?</Text></View>
        <View style={styles.faqBox}><Text style={[styles.faqQ, { fontFamily: 'Inter_400' }]}>Do you offer virtual classes?</Text></View>

        {/* FAQ Answers Block */}
        <View style={styles.faqAnswersBlock}>
          <Text style={[styles.faqA, { fontFamily: 'Inter_400' }]}>We offer yoga, cardio, strength training, and holistic wellness programs designed for all fitness levels.</Text>
          <Text style={[styles.faqA, { fontFamily: 'Inter_400' }]}>We offer seasonal promotions and discounts for new members.</Text>
          <Text style={[styles.faqA, { fontFamily: 'Inter_400' }]}>The Premium Membership includes unlimited group classes, personal training, and access to workshops.</Text>
          <Text style={[styles.faqA, { fontFamily: 'Inter_400' }]}>Yes, we offer virtual classes for members who prefer to work out from home.</Text>
        </View>

        <Text style={[styles.contact, { fontFamily: 'Inter_600' }]}>Contact Us
© ZenStudio 2023, Empowering Wellness and Fitness for All.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 40, backgroundColor: '#91D6D6' },
  header: { alignItems: 'center', paddingTop: 8, paddingBottom: 12 },
  headerImage: { width: '100%', height: 120 },
  heroTextWrap: { paddingHorizontal: 16, marginTop: 8 },
  heroTitle: { color: '#F5F5F5', fontSize: 25, fontWeight: '700', textAlign: 'center' },
  heroSubtitle: { color: '#F5F5F5', fontSize: 12, fontWeight: '500', textAlign: 'center', marginTop: 8 },
  programsWrap: { backgroundColor: '#5B30AF', paddingVertical: 18, paddingHorizontal: 16 },
  sectionBadge: { color: '#000', fontSize: 12, fontWeight: '400', textAlign: 'center', marginBottom: 8 },
  sectionTitle: { color: '#000', fontSize: 18, fontWeight: '700', marginBottom: 6, textAlign: 'center' },
  sectionCopy: { color: '#000', fontSize: 12, fontWeight: '400', textAlign: 'center', marginBottom: 8 },
  sectionCopyBold: { color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center', marginBottom: 12 },
  featuresRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  featureCard: { backgroundColor: '#91D6D6', padding: 10, borderRadius: 8, width: '48%' },
  featureTitle: { color: '#000', fontSize: 12, fontWeight: '700', marginBottom: 6, textAlign: 'center' },
  featureCopy: { color: '#000', fontSize: 12, fontWeight: '400', textAlign: 'center' },
  joinWrap: { padding: 16, backgroundColor: '#91D6D6' },
  joinBadge: { alignSelf: 'center', backgroundColor: '#2C2C2C', color: '#F5F5F5', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, fontWeight: '400' },
  stepsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  stepCard: { backgroundColor: '#5B30AF', padding: 12, borderRadius: 10, width: '32%' },
  stepTitle: { color: '#000', fontSize: 12, fontWeight: '700', marginBottom: 6, textAlign: 'center' },
  stepCopy: { color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center' },
  scheduleWrap: { padding: 16, backgroundColor: '#91D6D6' },
  classList: { marginTop: 8 },
  p: { color: '#000', fontSize: 12, fontWeight: '400', marginBottom: 6 },
  eventsWrap: { padding: 16, backgroundColor: '#5B30AF' },
  eventListTitle: { color: '#000', fontSize: 14, fontWeight: '700', marginTop: 8 },
  faqWrap: { padding: 16, backgroundColor: '#91D6D6' },
  faqBox: { borderWidth: 1, borderColor: '#000', padding: 8, marginBottom: 8 },
  faqQ: { color: '#000', fontSize: 12, fontWeight: '400' },
  contact: { color: '#000', fontSize: 12, fontWeight: '600', marginTop: 12, textAlign: 'center' },
  faqAnswersBlock: { marginTop: 16, marginBottom: 8 },
  faqA: { color: '#000', fontSize: 12, fontWeight: '400', marginBottom: 8 },
});
