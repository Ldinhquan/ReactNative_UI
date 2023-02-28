import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HowWeWorkScreen = () => {
  return (
    <LinearGradient colors={['#C4C4C4', '#28F7AC']} style={styles.container}>
      <View style={styles.circle} />
      
      <Text style={styles.growText}>GROW YOUR BUSINESS</Text>
      <Text style={styles.descriptionText}>
        We will help you to grow your business using online server
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 43 }}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </View>
        <View style={styles.signInButton}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </View>
      </View>
      <Text style={styles.growText1}>HOW WE WORK?</Text>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  circle: {
    width: 142,
    height: 142,
    borderWidth: 15,
    borderRadius: 71,
    borderColor: '#000000',
    marginTop: 69,
  },
  growText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 29,
    textAlign: 'center',
    color: '#000000',
    marginTop: 39,
  },
  descriptionText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
    marginTop: 43,
    paddingHorizontal: 30,
  },
  loginButton: {
    width: 125,
    height: 45,
    left:-30,
    backgroundColor: '#E3C000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  loginText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
  signInButton: {
    width: 125,
    height: 45,
    left:30,
    backgroundColor: '#E3C000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginRight: 30,
  },
  signInText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
  growText1:{
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
    marginTop: 39,
  }
});
export default HowWeWorkScreen;



