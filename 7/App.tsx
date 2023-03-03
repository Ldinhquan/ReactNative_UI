import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    
  <View style={{ flex: 1, backgroundColor: '#3B3B98' }}>
    <View style={styles.background_in}/>
    <View style={styles.rectangle1}/>
    <View style={styles.btnGenerate}/>
    <Text style={styles.txtPass}>PASSWORD{'\n'}GENERATOR</Text>
    <Text style={styles.txtGe}>GENERATE PASSWORD</Text>
    <Text style={styles.txtpass}>Password length</Text>
    <Text style={styles.txtIn}>Include lower case letters</Text>
    <Text style={styles.txtIn2}>Include upcase letters</Text>
    <Text style={styles.txtIn3}>Include number</Text>
    <Text style={styles.txtIn4}>Include special symbol</Text>
    <View style={styles.rectangle17}/>
    <View style={styles.rectangle20}/>
    <View style={styles.rectangle21}/>
    <View style={styles.rectangle22}/>
    <View style={styles.rectangle23}/>
    <Image style={styles.image1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaSXGn-gRRpLdutWJGYwdk_GWyZYIkO5hhQ&usqp=CAU'}}/>
    <Image style={styles.image2} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaSXGn-gRRpLdutWJGYwdk_GWyZYIkO5hhQ&usqp=CAU'}}/>

  </View>
  
  
  );
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background_in:{
    width:373,
    height:820,
    top:19,
    left:19,
    backgroundColor:'#23235B',
    borderRadius:20,
    shadowColor:'rgba(0,0,0,0.25)',
  },
  rectangle1:{
    position:'absolute',
    width:348,
    height:70,
    top:156,
    left:32,
    backgroundColor:'#151537',
  },
  btnGenerate:{
    position:'absolute',
    width:269,
    height:55,
    left:70,
    top:600,
    backgroundColor:'#3B3B98',
  },
  rectangle17:{
    position:'absolute',
    width:118,
    height:33,
    top:258,
    left:260,
    backgroundColor:'white',
  },
  rectangle20:{
    position:'absolute',
    width:25,
    height:25,
    top:318,
    left:353,
    backgroundColor:'white',
  },
  rectangle21:{
    position:'absolute',
    width:25,
    height:25,
    top:373,
    left:353,
    backgroundColor:'white',
  },
  rectangle22:{
    position:'absolute',
    width:25,
    height:25,
    top:428,
    left:353,
    backgroundColor:'white',
  },
  rectangle23:{
    position:'absolute',
    width:25,
    height:25,
    top:483,
    left:353,
    backgroundColor:'white',
  },
  image1:{
    position:'absolute',
    width:20,
    height:20,
    top:320,
    left:355,
  },
  image2:{
    position:'absolute',
    width:20,
    height:20,
    top:430,
    left:355,
  },










  txtPass:{
    position:'absolute',
    fontSize:25,
    color:'white',
    top:59,
    left:130,
    textAlign:'center',
    fontWeight:'bold',
  },
  txtGe:{
    position:'absolute',
    fontSize:18,
    top:615,
    left:100,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtpass:{
    position:'absolute',
    fontSize:20,
    color:'white',
    top:264,
    left:38,
    fontWeight:'bold',
  },
  txtIn:{
    position:'absolute',
    fontSize:20,
    color:'white',
    top:324,
    left:38,
    fontWeight:'bold',
  },
  txtIn2:{
    position:'absolute',
    fontSize:20,
    color:'white',
    top:379,
    left:38,
    fontWeight:'bold',
  },
  txtIn3:{
    position:'absolute',
    fontSize:20,
    color:'white',
    top:433,
    left:38,
    fontWeight:'bold',
  },
  txtIn4:{
    position:'absolute',
    fontSize:20,
    color:'white',
    top:486,
    left:38,
    fontWeight:'bold',
  },

 
  
 
});
export default HowWeWorkScreen;




