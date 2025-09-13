

let figmaAssets = {};
try {
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
}

export default function MobileMembership() {
  const [fontsLoaded] = useFonts({
    Inter_400: require('../../assets/fonts/Quicksand-Regular.ttf'),
    Inter_600: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    Inter_700: require('../../assets/fonts/Quicksand-SemiBold.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      {/* Top bar / hero */}
      <View style={styles.topBar}>
        <Image
          source={figmaAssets['Mobile_Membership_png'] || figmaAssets['Mobile_Membership_svg'] || require('../../assets/Mobile Membership.png')}
          style={styles.heroImg}
          resizeMode="cover"
        />
        <Text style={[styles.screenTitle, { fontFamily: 'Inter_400' }]}>Mobile Membership</Text>
      </View>

      {/* Membership hero copy */}
      <View style={styles.heroCopyWrap}>
        <Text style={[styles.heroHeading, { fontFamily: 'Inter_700' }]}>Transform Your Fitness Journey with ZenStudio Membership</Text>
        <Text style={[styles.heroCopy, { fontFamily: 'Inter_600' }]}>Join ZenStudio today and unlock access to personalized training, dynamic group classes, and holistic wellness programs designed to help you achieve your health goals.</Text>
        <Text style={[styles.heroFeature, { fontFamily: 'Inter_700' }]}>Personalized Training Plans</Text>
        <Text style={[styles.heroFeatureCopy, { fontFamily: 'Inter_600' }]}>Work with expert trainers to create a plan tailored to your fitness level and goals.</Text>
        <Text style={[styles.heroFeature, { fontFamily: 'Inter_700' }]}>Group Fitness Classes</Text>
        <Text style={[styles.heroFeatureCopy, { fontFamily: 'Inter_600' }]}>Stay motivated and inspired with a variety of classes led by top instructors.</Text>
        <Text style={[styles.heroFeature, { fontFamily: 'Inter_700' }]}>Wellness Programs</Text>
        <Text style={[styles.heroFeatureCopy, { fontFamily: 'Inter_600' }]}>Enhance your overall well-being with yoga, mindfulness, and nutrition guidance.</Text>
      </View>

      {/* Plans */}
      <View style={styles.plansWrap}>
        <View style={styles.planPillsRow}>
          <View style={styles.pill}><Text style={[styles.pillText, { fontFamily: 'Inter_400' }]}>Basic</Text></View>
          <View style={styles.pill}><Text style={[styles.pillText, { fontFamily: 'Inter_400' }]}>Plus</Text></View>
          <View style={styles.pill}><Text style={[styles.pillText, { fontFamily: 'Inter_400' }]}>Pro</Text></View>
        </View>

        <View style={styles.planCardsRow}>
          <View style={styles.planCard}>
            <Text style={[styles.planTitle, { fontFamily: 'Inter_700' }]}>Zen Basic</Text>
            <Text style={[styles.planPrice, { fontFamily: 'Inter_400' }]}>$29 /month</Text>
            <Text style={[styles.planCopy, { fontFamily: 'Inter_400' }]}>Perfect for beginners. Access to basic equipment, group fitness classes, locker room access, fitness assessment.</Text>
          </View>
          <View style={[styles.planCard, styles.planCardHighlighted]}>
            <Text style={[styles.planTitle, { fontFamily: 'Inter_700' }]}>Zen Plus</Text>
            <Text style={[styles.planPrice, { fontFamily: 'Inter_400' }]}>$49 /month</Text>
            <Text style={[styles.planCopy, { fontFamily: 'Inter_400' }]}>Most popular choice. Everything in Basic, one-on-one training sessions, exclusive workshops, priority booking.</Text>
          </View>
          <View style={styles.planCard}>
            <Text style={[styles.planTitle, { fontFamily: 'Inter_700' }]}>Zen Pro</Text>
            <Text style={[styles.planPrice, { fontFamily: 'Inter_400' }]}>$79 /month</Text>
            <Text style={[styles.planCopy, { fontFamily: 'Inter_400' }]}>Ultimate fitness experience. Everything in Plus, unlimited training sessions, 24/7 gym access, nutrition consultation.</Text>
          </View>
        </View>
      </View>

      {/* Studio Hours + Location */}
      <View style={styles.locationWrap}>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Studio Hours</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Monday-Friday 6:00 am to 9:00 pm{"\n"}Saturday-Sunday 8:00 am to 6:00 pm</Text>
        <Text style={[styles.sectionTitle, { marginTop: 12, fontFamily: 'Inter_700' }]}>Our Location</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>ZenStudio 123 Wellness Way, Healthy City, 54321</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400' }]}>Call Us: +1-800-ZENFIT  +1-800-WELLNESS</Text>
        <TouchableOpacity style={styles.locationButton}><Text style={[styles.locationButtonText, { fontFamily: 'Inter_400' }]}>Location</Text></TouchableOpacity>
      </View>

      {/* FAQ / Footer */}
      <View style={styles.faqWrap}>
        <Text style={[styles.sectionTitle, { fontFamily: 'Inter_700' }]}>Frequently Asked Questions</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400', marginBottom: 0 }]}>Find answers to commonly asked questions about ZenStudio's services, memberships, and policies.</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600', marginBottom: 0 }]}>What are your gym operating hours?</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400', marginBottom: 0 }]}>Monday-Friday 6:00 am to 9:00 pm, Saturday-Sunday 8:00 am to 6:00 pm</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600', marginBottom: 0 }]}>How do I cancel or freeze my membership?</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400', marginBottom: 0 }]}>Contact support to manage your membership.</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600', marginBottom: 0 }]}>Do you offer personal training sessions?</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400', marginBottom: 0 }]}>Yes — available on Plus and Pro plans.</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600', marginBottom: 0 }]}>What classes are included in the membership?</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400', marginBottom: 0 }]}>Group fitness, yoga, strength, and wellness programs.</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_600', marginBottom: 0 }]}>Is there free parking available?</Text>
        <Text style={[styles.p, { fontFamily: 'Inter_400', marginBottom: 0 }]}>Yes, free parking is available for all members.</Text>
        <Text style={[styles.footer, { fontFamily: 'Inter_600' }]}>Contact Us{"\n"}© ZenStudio 2023, Empowering Wellness and Fitness for All.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F5F5F5' },
  container: { paddingBottom: 32 },
  topBar: { backgroundColor: '#91D6D6', alignItems: 'center', paddingBottom: 8 },
  heroImg: { width: '100%', height: 180, borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  screenTitle: { color: '#000', fontSize: 20, fontWeight: '700', marginTop: 8, marginBottom: 4, textAlign: 'center' },
  heroCopyWrap: { backgroundColor: '#5B30AF', padding: 16, borderRadius: 12, margin: 16 },
  heroHeading: { color: '#fff', fontSize: 16, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  heroCopy: { color: '#fff', fontSize: 12, fontWeight: '600', textAlign: 'center', marginBottom: 12 },
  heroFeature: { color: '#fff', fontSize: 16, fontWeight: '700', marginTop: 8, textAlign: 'center' },
  heroFeatureCopy: { color: '#fff', fontSize: 12, fontWeight: '600', textAlign: 'center', marginBottom: 8 },
  plansWrap: { padding: 16, backgroundColor: '#5B30AF' },
  planPillsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  pill: { backgroundColor: '#91D6D6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  pillText: { color: '#000', fontSize: 16 },
  planCardsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  planCard: { width: '31%', backgroundColor: '#91D6D6', padding: 8, borderRadius: 10 },
  planCardHighlighted: { borderWidth: 1, borderColor: '#000' },
  planTitle: { color: '#000', fontSize: 12, fontWeight: '700', marginBottom: 4, textAlign: 'center' },
  planPrice: { color: '#000', fontSize: 12, fontWeight: '400', marginBottom: 6, textAlign: 'center' },
  planCopy: { color: '#000', fontSize: 12, fontWeight: '400', textAlign: 'center' },
  locationWrap: { padding: 16, backgroundColor: '#91D6D6', alignItems: 'center' },
  sectionTitle: { color: '#000', fontSize: 16, fontWeight: '700', marginBottom: 6 },
  p: { color: '#000', fontSize: 12, textAlign: 'center', marginBottom: 6 },
  pBold: { color: '#000', fontSize: 12, fontWeight: '700', marginTop: 8 },
  locationButton: { marginTop: 12, backgroundColor: '#5B30AF', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  locationButtonText: { color: '#F5F5F5', fontSize: 16 },
  faqWrap: { padding: 16, backgroundColor: '#91D6D6' },
  footer: { color: '#000', fontSize: 12, fontWeight: '600', marginTop: 12, textAlign: 'center' }
});
