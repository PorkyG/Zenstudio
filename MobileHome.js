import { StyleSheet } from 'react-native';

let figmaAssets = {};
try {
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
}

const trainers = [
  {
    name: 'Sophia Carter',
    role: 'Strength Coach',
    desc: 'Sophia specializes in strength training and functional fitness, helping clients build resilience and power.',
    image: figmaAssets.Soophia_Carter_svg || figmaAssets.Soophia_Carter_png || require('../../assets/Soophia Carter.svg'),
  },
  {
    name: 'James Lee',
    role: 'Yoga Instructor',
    desc: 'James brings calm and balance to your routine with his expertise in yoga and mindfulness practices.',
    image: figmaAssets.James_Lee_svg || figmaAssets.James_Lee_png || require('../../assets/James Lee.svg'),
  },
  {
    name: 'Olivia Brown',
    role: 'Nutritionist',
    desc: 'Olivia guides clients towards healthier eating habits, complementing their fitness journey.',
    image: figmaAssets.Olivia_Brown_svg || figmaAssets.Olivia_Brown_png || require('../../assets/Olivia Brown.svg'),
  },
];

const programs = [
  { label: 'Strength Training', icon: figmaAssets.Strength_svg || require('../../assets/Strength.svg') },
  { label: 'Yoga & Pilates', icon: figmaAssets.Yoga_svg || require('../../assets/Yoga.svg') },
  { label: 'Cardio Workouts', icon: figmaAssets.Cardio_svg || require('../../assets/Cardio.svg') },
  { label: 'Nutrition Workshops', icon: figmaAssets.Nutrition_svg || require('../../assets/Nutrition.svg') },
  { label: 'Mindfulness Sessions', icon: figmaAssets.Mindfulness_svg || require('../../assets/Mindfulness.svg') },
  { label: 'Recovery Programs', icon: figmaAssets.Recovery_svg || require('../../assets/Recovery.svg') },
];

const features = [
  { label: 'Personalized Training', desc: 'Work one-on-one with our expert trainers to create a fitness plan tailored to your needs.', icon: figmaAssets.Personalized_svg || require('../../assets/Personalized.svg') },
  { label: 'Group Classes', desc: 'Join dynamic group classes that keep you motivated and connected with the ZenStudio community.', icon: figmaAssets.Flexible_svg || require('../../assets/Flexible.svg') },
  { label: 'Wellness Programs', desc: 'Enhance your overall health with programs that focus on mindfulness, nutrition, and recovery.', icon: figmaAssets.Wellness_svg || require('../../assets/Wellness.svg') },
  { label: 'Progress Tracking', desc: 'Monitor your fitness journey with tools designed to track your achievements and milestones.', icon: figmaAssets.Progress_svg || require('../../assets/Progress.svg') },
  { label: 'Flexible Scheduling', desc: 'Enjoy the convenience of scheduling sessions that fit seamlessly into your lifestyle.', icon: figmaAssets.Dynamic_Small_svg || require('../../assets/Dynamic Small.svg') },
  { label: 'Safe Environment', desc: 'Train in a secure and welcoming space, designed to support your fitness journey.', icon: figmaAssets.Safe_svg || require('../../assets/Safe.svg') },
];

const locations = [
  {
    name: 'ZenStudio Downtown Branch',
    desc: 'Visit us at our central location for all your fitness needs.',
    address: '123 Fitness Ave, Downtown City, 54321',
    email: 'contact@zenstudio.com',
  },
  {
    name: 'ZenStudio Uptown Branch',
    desc: 'Connect with our team at our uptown studio.',
    address: '456 Wellness Blvd, Uptown City, 67890',
    email: 'uptown@zenstudio.com',
  },
  {
    name: 'ZenStudio Westside Branch',
    desc: 'Experience fitness and wellness at our westside location.',
    address: '789 Health St, Westside City, 12345',
    email: 'westside@zenstudio.com',
  },
];

const faqs = [
  'What are your gym operating hours?',
  'How do I cancel or freeze my membership?',
  'Do you offer personal training sessions?',
  'What classes are included in the membership?',
  'Is there free parking?',
];

export default function MobileHome() {
  const [fontsLoaded] = useFonts({
    Inter_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
    Inter_700: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
      <HamburgerMenu navigation={null} />
      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={figmaAssets.Mobile_Home_png || figmaAssets.Mobile_Home_svg || require('../../assets/Mobile Home.png')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <Text style={styles.heroTitle}>Achieve Your Best Self</Text>
        <Text style={styles.heroSubtitle}>Welcome to ZenStudio, where fitness meets wellness. Discover personalized training and group classes designed to elevate your health journey.</Text>
      </View>

      {/* Programs Section */}
      <View style={[styles.section, { backgroundColor: '#91D6D6' }]}> 
        <Text style={styles.sectionTitle}>Explore Our Fitness Programs</Text>
        <View style={styles.programsGrid}>
          {programs.map((p, i) => (
            <View key={p.label} style={styles.programItem}>
              <Image source={p.icon} style={styles.programIcon} />
              <Text style={styles.programLabel}>{p.label}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={[styles.pill, { backgroundColor: '#5B30AF', marginTop: 16 }]}> 
          <Text style={[styles.pillText, { color: '#F5F5F5' }]}>Programs</Text>
        </TouchableOpacity>
      </View>

      {/* Features Section */}
      <View style={[styles.section, { backgroundColor: '#91D6D6' }]}> 
        {features.map((f, i) => (
          <View key={f.label} style={styles.featureRow}>
            <Image source={f.icon} style={styles.featureIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.featureLabel}>{f.label}</Text>
              <Text style={styles.featureDesc}>{f.desc}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={[styles.pill, { backgroundColor: '#5B30AF', marginTop: 16 }]}> 
          <Text style={[styles.pillText, { color: '#F5F5F5' }]}>Class</Text>
        </TouchableOpacity>
      </View>

      {/* Trainers Section */}
      <View style={[styles.section, { backgroundColor: '#5B30AF' }]}> 
        <Text style={styles.sectionTitleDark}>Meet Our Expert Trainers</Text>
        <Text style={styles.sectionDescDark}>Our team of certified trainers is dedicated to helping you achieve your fitness goals with personalized guidance and support.</Text>
        {trainers.map((t, i) => (
          <View key={t.name} style={styles.trainerRow}>
            <Image source={t.image} style={styles.trainerAvatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.trainerName}>{t.name}</Text>
              <Text style={styles.trainerRole}>{t.role}</Text>
              <Text style={styles.trainerDesc}>{t.desc}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={[styles.pill, { backgroundColor: '#91D6D6', marginTop: 16 }]}> 
          <Text style={[styles.pillText, { color: '#000' }]}>Trainers</Text>
        </TouchableOpacity>
      </View>

      {/* Locations Section */}
      <View style={[styles.section, { backgroundColor: '#5B30AF' }]}> 
        <Text style={styles.sectionTitleDark}>ZenStudio Locations</Text>
        {locations.map((loc, i) => (
          <View key={loc.name} style={styles.locationBlock}>
            <Text style={styles.locationName}>{loc.name}</Text>
            <Text style={styles.locationDesc}>{loc.desc}</Text>
            <Text style={styles.locationAddr}>{loc.address}</Text>
            <Text style={styles.locationEmail}>{loc.email}</Text>
          </View>
        ))}
        <TouchableOpacity style={[styles.pill, { backgroundColor: '#91D6D6', marginTop: 16 }]}> 
          <Text style={[styles.pillText, { color: '#1E1E1E' }]}>Location</Text>
        </TouchableOpacity>
      </View>

      {/* Account Section */}
      <View style={[styles.section, { backgroundColor: '#91D6D6' }]}> 
        <Text style={styles.sectionTitle}>Access Your ZenStudio Account</Text>
        <Text style={styles.accountDesc}>Log in to manage your fitness schedule, track progress, and access exclusive resources.\n\nStay connected with your fitness journey through our secure member portal. Update preferences, schedule classes, and more.\n\nMember Profiles\nPersonalize your account to align with your fitness goals and preferences.\nSchedule Management\nEasily book and modify your training sessions and group classes.\nProgress Tracking\nMonitor your achievements and milestones directly from your account.\n\nYour Fitness, Your Way\nAccess ZenStudio anytime, anywhere, and stay in control of your wellness journey.</Text>
        <TouchableOpacity style={[styles.pill, { backgroundColor: '#5B30AF', marginTop: 16 }]}> 
          <Text style={[styles.pillText, { color: '#F5F5F5' }]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      <View style={[styles.section, { backgroundColor: '#5B30AF' }]}> 
        <Text style={styles.sectionTitleDark}>Frequently Asked Questions</Text>
        {faqs.map((q, i) => (
          <View key={q} style={styles.faqBox}>
            <Text style={styles.faqText}>{q}</Text>
          </View>
        ))}
        <Text style={styles.footerText}>Contact Us\n© ZenStudio 2023, Empowering Wellness and Fitness for All.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    width: 390,
    height: 155,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5B30AF',
    marginBottom: 0,
  },
  heroImage: { width: 390, height: 155, position: 'absolute', top: 0, left: 0 },
  heroTitle: { color: '#F5F5F5', fontSize: 16, fontWeight: '700', marginTop: 18, fontFamily: 'Inter_700' },
  heroSubtitle: { color: '#F5F5F5', fontSize: 10, fontWeight: '600', marginTop: 8, textAlign: 'center', paddingHorizontal: 12, fontFamily: 'Inter_700' },
  section: { width: 390, padding: 16, alignItems: 'center', marginBottom: 0 },
  sectionTitle: { fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'center', fontFamily: 'Inter_700' },
  sectionTitleDark: { fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'center', fontFamily: 'Inter_700', marginBottom: 8 },
  sectionDescDark: { fontSize: 12, color: '#000', fontWeight: '500', textAlign: 'center', marginBottom: 12 },
  programsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 12 },
  programItem: { alignItems: 'center', margin: 8, width: 90 },
  programIcon: { width: 27, height: 27, borderRadius: 14 },
  programLabel: { fontSize: 12, color: '#000', textAlign: 'center', marginTop: 4 },
  featureRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 8, width: 350 },
  featureIcon: { width: 33, height: 30, borderRadius: 16, marginRight: 16 },
  featureLabel: { fontSize: 12, color: '#000', fontWeight: '700' },
  featureDesc: { fontSize: 12, color: '#000', marginTop: 2 },
  pill: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8, alignSelf: 'center' },
  pillText: { fontSize: 16, color: '#000', fontWeight: '400', lineHeight: 16 },
  trainerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16, width: 350 },
  trainerAvatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#ccc', marginRight: 12 },
  trainerName: { fontWeight: '700', fontSize: 12, color: '#000' },
  trainerRole: { fontSize: 12, color: '#000', fontWeight: '700' },
  trainerDesc: { fontSize: 12, color: '#000', marginTop: 2 },
  locationBlock: { marginVertical: 8, alignItems: 'center' },
  locationName: { fontSize: 16, color: '#000', fontWeight: '700', textAlign: 'center' },
  locationDesc: { fontSize: 12, color: '#000', fontWeight: '600', textAlign: 'center' },
  locationAddr: { fontSize: 12, color: '#000', textAlign: 'center' },
  locationEmail: { fontSize: 12, color: '#000', textAlign: 'center', marginBottom: 4 },
  accountDesc: { fontSize: 12, color: '#000', fontWeight: '600', textAlign: 'center', marginTop: 8 },
  faqBox: { width: 372, height: 31, backgroundColor: '#fff', borderRadius: 6, marginVertical: 4, justifyContent: 'center', borderWidth: 1, borderColor: '#000', alignSelf: 'center' },
  faqText: { color: '#000', fontSize: 12, fontWeight: '400', paddingLeft: 12 },
  footerText: { color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center', marginTop: 16 },
});
