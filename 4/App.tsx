import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    <LinearGradient colors={['#BDF6C6', 'rgba(189, 246, 198, 0)']}  style={styles.container}>
      
      <Text style={styles.growText}>LOGIN</Text>
      
      

      
      
      
      <View style={styles.rectangle1} />
      <View style={{ position: 'absolute', top: 584, left: 90 }}>
      <Text style={styles.growText1}>Email</Text>
      </View>
      <View style={styles.rectangle2} />
      <View style={{ position: 'absolute', top: 584, left: 90 }}>
      <Text style={styles.growText2}>Password</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 43 }}>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </View>
      </View>
      <Text style={styles.descriptionText}>
      When you agree to terms and conditions
      </Text>
      <Text style={styles.Forgot}>For got your password?</Text>
      <Text style={styles.Orlogin}>Or login with </Text>

      <View style={{flexDirection: 'row'}}>
      <View style={styles.rectangle3} />
      
      <View style={styles.rectangle4} />
      <View style={styles.rectangle5} />
      </View>

      <Image style={styles.image} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png' }} />
      <Image style={styles.image1} source={{ uri: 'data:image/png;base64,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' }} />
      <Image style={styles.image2} source={{ uri: 'data:image/png;base64,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' }} />
      <Image style={styles.image3} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDm6Azm2GrmLl2y8FntgjrLtEnZ9oiacF2A&usqp=CAU' }} />



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
  image:{
    width:50,
    height:50,
   
    top:-31,
    right:115,
  },
  image1:{
    width:50,
    height:50,
    left:3,
    top:-81,
    

  },
  image2:{
    width:50,
    height:50,
    left:110,
    top:-130,
  },
  image3:{
    width:50,
    height:45,
    left:140,
    top:-440,
  },
  Forgot:{
    color:'blue',
  },
  Orlogin:{
    color:'black',
  },
 
  rectangle1: {
    width: 350,
    height: 50,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  rectangle2:{
    width: 350,
    height: 50,
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    top:20,

  },
  rectangle3:{
    width: 110,
    height: 52,
    backgroundColor: '#365899',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3B5998',
    top:20,

  },
  rectangle4:{
    width: 110,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    top:20,
  },
  rectangle5:{
    width: 110,
    height: 52,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    top:20,
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
    marginTop: -50,
  },
  growText1: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    top:-430,
    left:-40,
  },
  growText2:{
    color:'black',
    top:-360,
    fontSize:16,
    left:-40,
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
    backgroundColor: '#E53935',
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
    color: 'white',
  },

 
});
export default HowWeWorkScreen;




