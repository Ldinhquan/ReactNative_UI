import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    
  <View style={styles.container}>
    <View style={styles.rectangle1}/>
    
    <View style={styles.rectangle2}/>
    <View style={styles.rectangle3}/>
    <Image style={styles.imageTrump} source={{uri:'data:image/jpeg;base64,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'}}/>
    <Text style={styles.txtTrump}>DONAL TRUMP</Text>
    <Text style={styles.txtFull}>Full Stack developer, Android UI</Text>
    <Text style={styles.txtDo}>Donald Trump is closely associated with{'\n'}the sport of golf. As a real estate{'\n'}developer, Trump began acquiring and{'\n'}constructing golf courses in 1999
</Text>
    <Text style={styles.txtNY}>New York, USA</Text>
    <Text style={styles.txtrating}>rating</Text>
    <Text style={styles.txtprojects}>projects</Text>
    <Text style={styles.txt98}>9.8</Text>
    <Text style={styles.txt178}>178</Text>
    <View style={styles.rectangle4}/>
    <View style={styles.rectangle5}/>
    <Text style={styles.txtPO}>PORTFOLIO</Text>
    <Text style={styles.txtHire}>HIRE ME</Text>
  </View>
  
  
  );
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle1:{
    
    width:500,
    height:290,
    backgroundColor:"#51AC54"
  },
  rectangle2:{
    
    width:500,
    height:640,
    backgroundColor:'#C4C4C4',

  },
  rectangle3:{
    position:'absolute',
    width:300,
    height:290,
    backgroundColor:'white',
    top:190,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderWidth:2,
    borderColor:'black',
  },
  rectangle4:{
    position:'absolute',
    width:130,
    height:49,
    backgroundColor:'rgba(0,0,0,0)',
    borderWidth:2,
    borderColor:'#580FCE',
    top:720,
    left:60,
  },
  rectangle5:{
    position:'absolute',
    width:130,
    height:49,
    backgroundColor:'rgba(0,0,0,0)',
    borderWidth:2,
    borderColor:'#580FCE',
    top:720,
    left:210,
  },
  imageTrump:{
    position:'absolute',
    width:112,
    height:120,
    top:130,
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
  },
  txtTrump:{
    position:'absolute',
    fontSize:20,
    color:'black',
    top:250,
    fontWeight:'bold',
    textAlign: 'center',
  },
  txtFull:{
    position:'absolute',
    fontSize:16,
    color:'rgba(0, 0, 0, 0.65)',
    top:300,
    textAlign: 'center',
    fontWeight:'bold',
  },
  txtDo:{
    position:'absolute',
    fontSize:14,
    color:'rgba(0,0,0,0.55)',
    top:350,
    textAlign: 'center',
    fontWeight:'bold',
  },
  txtNY:{
    position:'absolute',
    fontSize:18,
    color:'black',
    top:440,
    textAlign: 'center',
    fontWeight:'bold',
  },
  txtrating:{
    position:'absolute',
    fontSize:17,
    color:'black',
    top:650,
    left:100,
    fontWeight:'bold',
  },
  txtprojects:{
    position:'absolute',
    fontSize:17,
    color:'black',
    top:650,
    left:250,
    fontWeight:'bold',
  },
  txt98:{
    position:'absolute',
    fontSize:28,
    color:'black',
    top:600,
    left:100,
    fontWeight:'bold',
  },
  txt178:{
    position:'absolute',
    fontSize:28,
    color:'black',
    top:600,
    left:255,
    fontWeight:'bold',
  },
  txtPO:{
    position:'absolute',
    fontSize:17,
    color:'#E710D1',
    top:730,
    left:75,
    fontWeight:'bold',
  },
  txtHire:{
    position:'absolute',
    fontSize:17,
    color:'#06896A',
    top:730,
    left:240,
    fontWeight:'bold',
  }
 
});
export default HowWeWorkScreen;




