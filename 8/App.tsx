import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    
  <View style={{ flex: 1, backgroundColor: '#C4C4C4' }}>
    <View style={styles.background_1}/>
    <Image style={styles.imagebook} source={{uri:'data:image/jpeg;base64,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'}}/>
    <Text style={styles.txtnguyenham}>Nguyên hàm tích phân và ứng dụng</Text>
    <Text style={styles.txtcungcap}>Cung cấp bởi Tiki Trading</Text>
    <Text style={styles.txt141}>141.800 d</Text>
    <Text style={styles.txt1411}>141.800 d</Text>
    <Text style={styles.txt1}>1</Text>
    <View style={styles.rectangle37}/>
    <View style={styles.rectangle41}/>
    <View style={styles.rectangle38}/>
    <View style={styles.rectangle39}/>
    <View style={styles.rectangle40}/>
    <View style={styles.rectangle42}/>
    <Text style={styles.txtMuasau}>Mua sau</Text>
    <Text style={styles.txtXemtaiday}>Xem tại đây</Text>
    <Text style={styles.txtMagiamgia}>Mã giảm giá đã lưu</Text>
    <View style={styles.btnlogin}/>
    <Text style={styles.txtMagiamgia2}>Mã giảm giá</Text>
    <View style={styles.yellow_block}/>
    <View style={styles.btnapdung}/>
    <Text style={styles.txtApdung}>Áp dụng</Text>
    <View style={styles.background_2}/>
      <Text style={styles.txtPhieuquatang}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
      <Text style={styles.txtNhaptaiday}>Nhập tại đây?</Text>
    <View style={styles.background_3}/>
      <Text style={styles.txt1412}>141.800 d</Text>
      <Text style={styles.txtTamtinh}>Tạm tính</Text>
    <View style={styles.background_4}/>
      <Text style={styles.txtThanhtien}>Thành tiền</Text>
      <View style={styles.btnLogin}/>
      <Text style={styles.txtDathang}>TIẾN HÀNH ĐẶT HÀNG</Text>
      <Text style={styles.txt1413}>141.800 d</Text>
  </View>
  
  
  );
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background_1:{
    width:500,
    height:350,
    backgroundColor:'white',
  },
  background_2:{
    width:500,
    height:51,
    backgroundColor:'white',
    marginTop:20,
  },
  background_3:{
    width:500,
    height:51,
    backgroundColor:'white',
    marginTop:20,
  },
  background_4:{
    width:500,
    height:200,
    backgroundColor:'white',
    marginTop:170,
  },

 
 
 
 
  imagebook:{
    position:'absolute',
    width:104,
    height:127,
    left:13,
    top:14,
  },
  txtMagiamgia:{
    position:'absolute',
    fontSize:12,
    left:13,
    top:162,
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtXemtaiday:{
    position:'absolute',
    fontSize:12,
    left:137,
    top:162,
    color:'#134FEC',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtMuasau:{
    position:'absolute',
    fontSize:12,
    left:293,
    top:125,
    color:'#134FEC',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtnguyenham:{
    position:'absolute',
    fontSize:12,
    left:142,
    top:14,
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtcungcap:{
    position:'absolute',
    fontSize:12,
    left:142,
    top:42,
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
  },
  txt141:{
    position:'absolute',
    fontSize:18,
    left:142,
    top:67,
    color:'#EE0D0D',
    textAlign:'center',
    fontWeight:'bold',
  },
  txt1411:{
    position:'absolute',
    fontSize:12,
    left:142,
    top:99,
    color:'#808080',
    textAlign:'center',
    fontWeight:'bold',
  },
  txt1:{
    position:'absolute',
    fontSize:15,
    left:167,
    top:120,
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtMagiamgia2:{
    position:'absolute',
    fontSize:18,
    color:'black',
    top:220,
    left: 65,
    textAlign:'center',
    fontWeight:'bold',
  },
  txtApdung:{
    position:'absolute',
    fontSize:20,
    top:222,
    left:257,
    color:'white',
    lineHeight:23.44,
    fontWeight:'bold',
    textAlign:'center',
  },
  txtPhieuquatang:{
    position:'absolute',
    fontSize:12,
    top:390,
    left:13,
    color:'black',
    lineHeight:14.06,
    fontWeight:'bold',
    textAlign:'center',
  },
  txtNhaptaiday:{
    position:'absolute',
    fontSize:12,
    top:390,
    left:290,
    color:'#134FEC',
    lineHeight:14.06,
    fontWeight:'bold',
    textAlign:'center',
  },
  txt1412:{
    position:'absolute',
    fontSize:18,
    left:290,
    top:452,
    color:'#EE0D0D',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtTamtinh:{
    position:'absolute',
    fontSize:18,
    left:13,
    top:452,
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtThanhtien:{
    position:'absolute',
    fontSize:18,
    top:700,
    left:13,
    color:'#808080',
    textAlign:'center',
    fontWeight:'bold',
  },
  txtDathang:{
    position:'absolute',
    fontSize:20,
    top:760,
    left:87,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
  },
  txt1413:{
    position:'absolute',
    fontSize:20,
    top:700,
    left:285,
    color:'#EE0D0D',
    textAlign:'center',
    fontWeight:'bold',
  },















  rectangle37:{
    position:'absolute',
    width:14.22,
    height:16,
    top:124,
    left:142,
    backgroundColor:'#C4C4C4',
  },
  rectangle38:{
    position:'absolute',
    width:14.22,
    height:16,
    top:124,
    left:187,
    backgroundColor:'#C4C4C4',
  },
  rectangle39:{
    position:'absolute',
    width:2.18,
    height:8,
    top:128,
    left:193,
    backgroundColor:'black',
  },
  rectangle40:{
    position:'absolute',
    width:8,
    height:2.18,
    top:130.7,
    left:190,
    backgroundColor:'black',
  },
  rectangle41:{
    position:'absolute',
    width:8,
    height:2.18,
    top:131,
    left:145,
    backgroundColor:'black',
  },
  rectangle42:{
    position:'absolute',
    width:55,
    height:1.5,
    top:108,
    left:142,
    backgroundColor:'#808080',
  },
  btnlogin:{
    position:'absolute',
    width:208,
    height:45,
    top:211,
    left:13,
    borderWidth:2,
    borderColor:'#808080',
    borderRadius:5,
  },
  yellow_block:{
    position:'absolute',
    width:32,
    height:16,
    top:227,
    left:26,
    backgroundColor:'#F2DD1B',
  },
  btnapdung:{
    position:'absolute',
    width:99,
    height:45,
    top:211,
    left:245,
    borderRadius:2,
    backgroundColor:'#0A5EB7',

  },
  btnLogin:{
    position:'absolute',
    width:385,
    height:50,
    top:750,
    left:13,
    borderRadius:2,
    backgroundColor:'#E53935',
  },



  
  
  
 
  
 
});
export default HowWeWorkScreen;




