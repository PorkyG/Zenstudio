
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';


let figmaAssets = {};
try {
  figmaAssets = require('../figmaAssets').default || {};
} catch (e) {
  figmaAssets = {};
}


export default function MainLogin() {
	const navigation = useNavigation();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [fontsLoaded] = useFonts({
		'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
		'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
	});
	if (!fontsLoaded) return null;

	return (
		<View style={styles.container}>
			<View style={styles.bg} />
			<Text style={styles.brand}>Zenfit Studio</Text>
			<View style={styles.inputBlock}>
				<Text style={styles.label}>Username</Text>
				<TextInput
					style={styles.input}
					value={username}
					onChangeText={setUsername}
					placeholder="Enter your username"
					placeholderTextColor="#888"
				/>
				<View style={styles.underline} />
				<Text style={[styles.label, { marginTop: 24 }]}>Password</Text>
				<TextInput
					style={styles.input}
					value={password}
					onChangeText={setPassword}
					placeholder="Enter your password"
					placeholderTextColor="#888"
					secureTextEntry
				/>
				<View style={styles.underline} />
				<TouchableOpacity style={styles.forgotWrap} onPress={() => {}}>
					<Text style={styles.forgot}>Forgot Password</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Home')}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>
			<View style={styles.joinRow}>
				<Text style={styles.noAccount}>Dont have an account?</Text>
				<TouchableOpacity onPress={() => {}}>
					<Text style={styles.joinNow}>Join now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5B30AF',
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'relative',
		paddingTop: 0,
	},
	bg: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: 889,
		backgroundColor: '#5B30AF',
		zIndex: 0,
	},
	brand: {
		fontFamily: 'Quicksand-SemiBold',
		fontSize: 36,
		color: 'black',
		textAlign: 'center',
		marginTop: 187,
		marginBottom: 60,
		fontWeight: '600',
		width: 300,
		alignSelf: 'center',
	},
	inputBlock: {
		width: 300,
		marginTop: 0,
		alignItems: 'center',
	},
	label: {
		fontFamily: 'Quicksand-Regular',
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		fontWeight: '400',
	},
	input: {
		width: 220,
		height: 36,
		fontFamily: 'Quicksand-Regular',
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		marginTop: 8,
		marginBottom: 0,
		fontWeight: '400',
		backgroundColor: 'transparent',
	},
	underline: {
		width: 220,
		height: 1,
		backgroundColor: 'black',
		marginTop: 0,
		marginBottom: 0,
	},
	forgotWrap: {
		width: 220,
		alignItems: 'center',
		marginTop: 8,
		marginBottom: 0,
	},
	forgot: {
		fontFamily: 'Quicksand-Regular',
		fontSize: 12,
		color: 'black',
		fontWeight: '400',
		textAlign: 'center',
	},
	loginBtn: {
		width: 219,
		height: 37,
		backgroundColor: '#A7F4F4',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
		alignSelf: 'center',
		flexDirection: 'row',
		gap: 10,
	},
	loginText: {
		fontFamily: 'Quicksand-Regular',
		fontSize: 16,
		color: 'black',
		fontWeight: '400',
		textAlign: 'center',
	},
	joinRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 70,
		width: 300,
	},
	noAccount: {
		fontFamily: 'Quicksand-Regular',
		fontSize: 12,
		color: 'black',
		fontWeight: '400',
		textAlign: 'center',
		marginRight: 5,
	},
	joinNow: {
		fontFamily: 'Quicksand-Regular',
		fontSize: 14,
		color: 'black',
		fontWeight: '400',
		textAlign: 'center',
	},
});
