import React,{useState} from 'react'
import { Text, View,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'


const App=()=>{
  const [randomColor,setRandomColor]=useState("rgb(32,0,126)")
  const changeBackground=()=>{
    let color=`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    setRandomColor(color)
    
  }
  const resetBackground=()=>{
    setRandomColor('black')
  }
return (
  <>
  <StatusBar backgroundColor={randomColor}/>
  <View style={[styles.container,{backgroundColor:randomColor}]} >
  <TouchableOpacity onPress={changeBackground}>
  <Text style={styles.text}>Tap ME!!!</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={resetBackground}>
  <Text style={styles.resetText}>Reset !!</Text>
  </TouchableOpacity>
  </View>
   </>
)
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',

},
text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"white",
    borderRadius:15,
    margin:20
  },
  resetText:{
    fontSize:30,
    backgroundColor:"black",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"white",
    borderRadius:15
  }
})