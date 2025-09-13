import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import figmaAssets from '../figmaAssets';

const posts = [
  {
    id: 1,
    name: 'Sarah L.',
    role: 'Member',
    time: '2 hrs ago',
    initials: 'SL',
    likes: 20,
    comments: 4,
    message: 'Feeling calmer and stronger every week. Morning Flow with Alex always sets the tone for my day',
    image: figmaAssets.Feed_Page_png || require('../../assets/Feed Page.jpg'),
  },
  {
    id: 2,
    name: 'Emma Rodriguez',
    role: 'Coach',
    time: '4 hrs ago',
    initials: 'ER',
    likes: 57,
    comments: 25,
    message: 'Remember: Pilates is about precision and control, not speed. Focus on form. Your core will thank you later.',
    image: figmaAssets.Emma_png || require('../../assets/Emma.png'),
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Coach',
    time: '6 hrs ago',
    initials: 'MJ',
    likes: 20,
    comments: 4,
    message: 'Shoutout to our HIIT Warriors who crushed 3 classes this week! Keep up the energy, you’re unstoppable!\nRoss C., Porky G. Jove T.',
    image: figmaAssets.Marcus_png || require('../../assets/Marcus.png'),
  },
];

export default function FeedPage() {
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    'Lato-Regular': require('expo-font/build/vendor/react-native-vector-icons/Fonts/Lato.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <View style={styles.headerBg} />
      <Text style={styles.feedTitle}>Feed</Text>
      <View style={styles.whatsNewRow}>
        <Text style={styles.whatsNew}>Whats New?</Text>
      </View>
      <Text style={styles.subtitle}>Your space to connect, celebrate, and stay motivated.</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map(post => (
          <View key={post.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarInitials}>{post.initials}</Text>
              </View>
              <View style={styles.cardHeaderText}>
                <Text style={styles.name}>{post.name}</Text>
                <Text style={styles.role}>{post.role}</Text>
                <Text style={styles.time}>{post.time}</Text>
              </View>
              <View style={styles.menuIcon}>
                <View style={styles.menuBar} />
              </View>
            </View>
            <Image source={post.image} style={styles.postImage} resizeMode="cover" />
            <View style={styles.divider} />
            <Text style={styles.message}>{post.message}</Text>
            <Text style={styles.likesComments}>
              {' '}❤️ {post.likes} likes · 💬 {post.comments} comments
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B30AF',
    paddingTop: 0,
  },
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 83,
    backgroundColor: '#91D6D6',
    zIndex: 0,
  },
  feedTitle: {
    position: 'absolute',
    top: 36,
    left: 11,
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 24,
    color: 'black',
    zIndex: 1,
  },
  whatsNewRow: {
    position: 'absolute',
    top: 116,
    left: 28,
    zIndex: 1,
  },
  whatsNew: {
    fontFamily: 'Quicksand',
    fontWeight: '700',
    fontSize: 24,
    color: 'black',
    textAlign: 'right',
  },
  subtitle: {
    position: 'absolute',
    top: 150,
    left: 30,
    width: 344,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: 'black',
  },
  card: {
    marginTop: 60,
    marginHorizontal: 26,
    backgroundColor: '#91D6D6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    minHeight: 450,
    width: 340,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#91D6D6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5B30AF',
  },
  avatarInitials: {
    color: '#91D6D6',
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  cardHeaderText: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 18,
    color: 'black',
  },
  role: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    color: 'black',
  },
  time: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 10,
    color: 'black',
  },
  menuIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBar: {
    width: 18,
    height: 12,
    backgroundColor: '#1D1B20',
    borderRadius: 2,
  },
  postImage: {
    width: '100%',
    height: 165,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#5B30AF',
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
  },
  message: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: 'black',
    letterSpacing: 0.24,
    marginBottom: 10,
  },
  likesComments: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: 'black',
  },
});
