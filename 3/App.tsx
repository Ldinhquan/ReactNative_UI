import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    <LinearGradient colors={['#9890e3','#b1f4cf']} start={{x: 0, y: 2}} end={{x: 0, y: 0}}   style={styles.container}>
      <Text style={styles.growTextCode}>CODE</Text>
      <Text style={styles.growText}>VERIFICATION</Text>
      
      

      <Text style={styles.descriptionText}>
      Enter ontime password sent{'\n'}
      ++849092605798
      </Text>
      
      
      
      <View style={{flexDirection: 'row'}}>
      <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: 'black', opacity: 0.5 }} />
      <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: 'black', opacity: 0.5 }} />
      <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: 'black', opacity: 0.5 }} />
      <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: 'black', opacity: 0.5 }} />
      <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: 'black', opacity: 0.5 }} />
      <View style={{ width: 50, height: 50, borderWidth: 2, borderColor: 'black', opacity: 0.5 }} />
      </View>

      <View style={{ position: 'absolute', top: 584, left: 90 }}>
      <Text style={styles.growText1}>Email</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 43 }}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>VERIFY CODE</Text>
        </View>
      </View>
     
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
  growTextCode:{
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize:60,
    color:'black',
  },
  rectangle: {
    width: 350,
    height: 50,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
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
  growText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 29,
    textAlign: 'center',
    color: '#000000',
    marginTop: 39,
  },
  growText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  descriptionText: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    color: '#000000',
    marginTop: 40,
    paddingHorizontal: 30,
  },
  loginButton: {
    width: 350,
    height: 50,
    left:-15,
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

 
});
export default HowWeWorkScreen;



