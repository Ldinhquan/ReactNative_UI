import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const HowWeWorkScreen = () => {
  return (
    
  <View style={styles.container}>
    <View style={styles.rectangle1}/>
    <View style={styles.rectangle2}/>
    <Image style={styles.imageUSB} source={{uri:'data:image/png;base64,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'}}/>
    <Text style={styles.txtUSB}>USB Bluetooth Music Receiver{'\n'} HJX-001- Biến loa thường thành loa{'\n'}bluetooth</Text>
    <Text style={styles.txt1}>Cực kỳ hài lòng</Text>
    <Image style={styles.imageS1} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngNPaYZpCF48thZH3PX4UeoAcP5jVjD_xOw&usqp=CAU'}}/>
    <Image style={styles.imageS2} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngNPaYZpCF48thZH3PX4UeoAcP5jVjD_xOw&usqp=CAU'}}/>
    <Image style={styles.imageS3} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngNPaYZpCF48thZH3PX4UeoAcP5jVjD_xOw&usqp=CAU'}}/>
    <Image style={styles.imageS4} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngNPaYZpCF48thZH3PX4UeoAcP5jVjD_xOw&usqp=CAU'}}/>
    <Image style={styles.imageS5} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngNPaYZpCF48thZH3PX4UeoAcP5jVjD_xOw&usqp=CAU'}}/>
    <Text style={styles.txtThemhinhanh}>Thêm hình ảnh</Text>
    <Image style={styles.imageMaychupanh} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD////t7e3u7u7r6+v09PSYmJh0dHTx8fF8fHyNjY329va2trajo6Orq6tRUVFXV1fX19e9vb3GxsZFRUXf39+xsbHT09Oenp4yMjJeXl6BgYHb29vNzc2mpqY8PDxwcHApKSkQEBBmZmYbGxtISEguLi5TU1M+Pj4jIyMZGRmJiYkT33YnAAAJ8ElEQVR4nO1da3fiOAwNOA4OBgrhTSmFdjrdbv///9uklCXEchLbUh4QfRmd04mj2zrWtSzJXi+RPmOsf6ea1xA7OoQdwkKEsfh3qnmJegbr36fmsdqnEa3GOoSt15h3/ST9u9T6Xu0mUGsP4w9rt6ND6IywduZBp3WcpvXaI3j8+0d4/STrd84dp7HSHsYf1m5Hh9AZYe3Mg07rOE3rtUfw+PeP8PpJ1u+cO05jpT2MP6zdjg6hM8LamQed1nGa1mv4Hl9wzoWz1lyEMgoSGSdiqc2xEV4/SXcHKwcehgwby2nmKPgSmSFahegP92gAPU+gWYWJEBGgt2giwgkmQu8FGyECe1igIgyRrMLjNGyJCjD+EpvGafgGGWEkGubx5T/ICI+yWQjRJ6nn8WZxGoE9SeNpypytQuU0uCtpImGjOA0T6AA9r1Eenx8IEM5FgxCir6SJDGRzOA3DJN1XEQ3iNBSTNJ6mjlZhcppXEoQD1wmK5/H7JAA9rzkIx0QI5ygIMTgNzSSNuamTVXichmglTUQ0g9PIIRnCFQL9dkfIfDKA3lcjEHIKPnORd4mF0J4zSKpl5iw7V/tKcBp2PkngMpaMJuWS7hu8yMZX3nvVBHPlNEzK/SQ4TqfTp0Sm01vtRI4vka3y3rO2GwSrpeQsd6oWefzl8E8lIOxlG/gOCJFOWqhlmI8wh9Os6ja9tMytOI3Y1W23gYRSi0PvD2m9ALbstDi0CPGDZ7RyNEXYjjUmLZt8hFkuENVtr4XsDThNn4ZMf328H8NwcHxf/Esx/ImX5zT8G/vt75tzkD7hW/zn5aMAfa2eQJkqsMfH/RNOV/sYVvbtIga7PnxgvugPtBGBESLGXRar+LU63hT/WcXhL97LIhAhxGnQfrODdWZkMEkFbbqGwDsgTsOwgoNDWSpUFP+D5Ju+ZDlOI3Ayf45cnTJazX9CeadfzuNzjLyR7YtZ/EFGbwhvTY6ryiAM3F8VSNNEAy5C99eu9AjTXIA7RyZOa2kRV5GliZR2+Z2IcpzG9W+4E7fjldfKhO3GvCf5/BP82QgYGfKHjgiHMj9ykhcVOhYNfpI/T4gemBoxUkcGPb4bwpV0OEkpjJ/LyxMSsrIShJF0OiuS+Wkrm9QTwOILIgQ4jQvCNXc4REk0mRsdShMFwMyROh7EaVzW0og7gDtr4PT7lVM6jjRSf35dS3M5jQPCA0YymnzWjv9PenMCOJcJL+fxrRE+uywyqeVmqn1DGiFAvagRfuQuMizZEZ7nYbxbzHUo4kv3iuV1YZTvRgjT3ELYIvRZHmtZrr53ZzKyfR+OctmNmOlecbzuHqD/Q8xp5rejpDQmZ8PsIc5rsJRM+4R2D35ZLYWA4rm0nGag30xEcPB1N9c+IbW7qSD+qRByBnJTWo+v/bTWW+0zn0sNwpyM3LdgHh00YQFShCPdkTuwIKTkW+cyrBYDSk6zkDBDWRc9+OXDLEjY7IgpOc1eGfpHK5McHalmJRpAWQqFkNNM4U+w3LZ9DH+MFqfPhB5/BiIsG0LbgAgtDmjpEL6Ci0z5s4EVuNwYm0HIaQ7qKH1u8jeYQfnA5qcndJymB4xiVmMib5790Swi02ScJoQmmVmuzQ6a5sbn0GQe/wVAaFpEEwEIjUPTZAiBpZCbjuEBCI3rVKg4zRFw2OYB7AMwip7RwkLFacYiyyP6NqVsop+1xfgsmorTzJQzCivit1IOqaFgU65QeXw1OiNtUhGe1A2m6VQgQrhQEb4YWnYWNclQGo5AxGlCrvAIu0jPRLFFv9XXjEDDaSa9LI8wNexXnrlii+FSQ8Rp1MoWc2f4I1u1HM+wZIzI4yuxFn0wsEDUkkrD7DMihExBaLM9T2SvHFIbLllEnObm2Z9Ypm054lxx2IYFR0ScJt7mZH5F1giztrDCQNatEHEadZrbFudHWVtMv2gij68itM2LaypCXxnVNuVIaYIlTGcpDafxWZZHWK+lWVtME9CIOI3fy/AI68S4pVLFZDgSEaeZZae5daMTldMYzgYij69GWEy3BL/ypCI0XJWJEKpBeegAuoQE3PJY4H8h4jSDXpZHCLuKqTVTbDEs3CHiNCf1YM3uQxSKLaabFKo4jeqDpE2meKhEMUzdIVmcZq5Eoqym6YtyTG5M4akQBuoBt8UeeKHmUxUnY2aE6uxpIZWcGIv2bZFQRzEdg+zsSQI5MaYnuJ89hY2Yd9MkO3saASczpgFFP/uxxJpxyI7sZOYJOl07Gg2xUW0Dc2TzhS6fRgCjGNm3UBc8462TR5lPE0A5MSa7VzAX52hsB2E+DWCg3yv/N/ChXBwLj0OYT7OCPqPSu7sl8KzV0QBhPs0biLDkggotozHzM7eCNEd4BVrZ84uXm62Efzs2lbqkOcLZUS5aUflkyFULEs2qCJI0R/hZZka5aLkf49+9pgIqJ5s9R2hzhGfanv/a8Okb4L9+Nyd2DQFoc4S3+ixoNoZylhcrrn3CspqcuO7pW2tvn8tZcLsp3m2WeUWYlsXP1HVPs5tRbrWk29QyOnwPjoPvSeSfOzxpS4NsQ8rkdU++cgp1m9gsfi/qEAX/z5yQ/gp53dMrSlWQsG/pQF735E2ty0dTy5IwzfWqEqF3dO+Rxx06OlDXPSUyUMcz1Fx6D1RSy32Mv0UNuymhMeHUXKGaWu4dt7/VQPhu/beqqeX2tr7tnU185tg6oiKElzo9c4TOLfCqqOU+S3AzXlnNvYdLBbXcF9muU5upMjD7co7Q3IS+ljslz2YTdGl3qJqRCjx+WuDoFKwhNIxJpGKE3ttK3wQrtRTY51ApUgWnyUgQ7wIv74SYDBNyhtgcrqr+NDfyOZLxdgnmL7zHJqidpCvqT6PIRzBn8hqxOG8/uOxHQ+wOopV5fEC2g8N8z5LGCoL1+rNofKToslwnwmqkLKehusyBXoCiaYjTQE1DWiJqGjXcc8+u4qUJUrLnHsn1VJXICbo/CUIo29TnOi1DNfUP7iNsXS9Rt+wZwJvAPsKsblPt5K/M4NByGrsCyfplVL6PcDvXmlew0ZjmbgTexn7earGultPEmkRoJlqxjDkYJNHfjdA2j/GtwZFzNwJOZ9+qZKDFoUfYqoka6E+Ecu57Kt/1tm75esnp15h335Poo/fXJ5GAC8D6XE6T0jaUN3JhyOekoGtx0X1PXPrRYRiG4SCRMGyS9jyczPuy4Gq2Mjc8Xu/s4o3Tii/URbt5vLEa1r3czdXQ7uVuroZzp3OTtQ5h+zWUe7kbreHcy91k7QH8YYew7VrHae5Aexh/WLsdHUJnhLUzDzqt4zSt1x7B498/wusnWb9z7jiNlfYw/rB2OzqEzghrZx50WsdpWq89gse/f4TXT7J+59xxGivtYfxh7XZ0CF0RXhfU+9P+A88jGlRz9W83AAAAAElFTkSuQmCC'}}/>



    <View style={styles.rectangle3}/>
    <View style={styles.rectangle4}/>
    <Text style={styles.txtChiase}>Hãy chi sẻ những điều mà bạn{'\n'}thích về sản phẩm</Text>
    <View style={styles.rectangle5}/>
    <Text style={styles.txtGui}>Gửi</Text>
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
    backgroundColor:"white",
    marginBottom:10,
  },
  rectangle2:{
    
    width:500,
    height:800,
    backgroundColor:'white',
  
  },
  rectangle3:{
    position:"absolute",
    width:293,
    height:68,
    backgroundColor:'rgba(0,0,0,0)',
    borderColor:'blue',
    borderWidth:2,
    borderRadius:10,
  },
  rectangle4:{
    position:"absolute",
    width:293,
    height:200,
    backgroundColor:'rgba(0,0,0,0)',
    borderColor:'#C4C4C4',
    borderWidth:2,
    borderRadius:10,
    top:500,
  },
  rectangle5:{
    position:'absolute',
    width:293,
    height:50,
    backgroundColor:'#0D5DB6',
    borderRadius:10,
    top:730,
  },
  imageUSB:{
    position:'absolute',
    width:70,
    height:50,
    top:50,
    left:20,
  },
  imageS1:{
    position:'absolute',
    width:39,
    height:39,
    left:80,
    top:300,

  },
  imageS2:{
    position:'absolute',
    width:39,
    height:39,
    left:130,
    top:300,

  },
  imageS3:{
    position:'absolute',
    width:39,
    height:39,
    left:180,
    top:300,

  },
  imageS4:{
    position:'absolute',
    width:39,
    height:39,
    left:230,
    top:300,

  },
  imageS5:{
    position:'absolute',
    width:39,
    height:39,
    left:279,
    top:300,

  },
  imageMaychupanh:{
    position:'absolute',
    width:39,
    height:39,
    left:90,
  },
  txt1:{
    position:'absolute',
    fontSize:18,
    color:'black',
    top:250,
    fontWeight:'bold',
  },
  txtThemhinhanh:{
    position:'absolute',
    fontSize:18,
    color:'black',
    top:415,
    fontWeight:'bold',
  },
  txtChiase:{
    position:'absolute',
    fontSize:18,
    color:'#C4C4C4',
    fontWeight:'700',
    top:530,
    
  },
  txtGui:{
    position:'absolute',
    fontSize:20,
    color:'white',
    textAlign:'center',
    top:739,

  },
  txtUSB:{
    position:'absolute',
    fontSize:16,
    color:'black',
    top:50,
    left:110,
    fontWeight:'bold',
  }
  
  
 
});
export default HowWeWorkScreen;




