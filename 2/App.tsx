import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    <LinearGradient colors={['#BDF6C6', 'rgba(189, 246, 198, 0)']}  style={styles.container}>
      
      <Image style={styles.image} source={{ uri: 'https://i.pinimg.com/564x/6f/df/35/6fdf3511fd3fbdc1a5977e518207b930.jpg' }} />
      <Text style={styles.growText}>FORGET</Text>
      <Text style={styles.growText}>PASSWORD</Text>
      

      <Text style={styles.descriptionText}>
      Provide your account’s email for which you want to reset your password
      </Text>
      
      
      
      <View style={styles.rectangle} />
      <View style={{ position: 'absolute', top: 584, left: 90 }}>
      <Text style={styles.growText1}>Email</Text>
      <Image style={styles.image1} source={{ uri: 'https://i.pinimg.com/236x/c1/46/43/c1464369e9ddb234afbe55d6df7c4b16.jpg' }} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 43 }}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>Next</Text>
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  image1:{
    width: 48,
    height: 47,
    marginTop:-33,
    left:-52,
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



