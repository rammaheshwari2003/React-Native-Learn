// import {Text, View, Image,Button, TouchableOpacity, TouchableHighlight, Alert, Pressable } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//       <SafeAreaView>
//     {/* <View> */}

// {/* ----------------------------- Text --------------------------- */}
//       <Text>App</Text>

// {/* ----------------------------- Image --------------------------- */}
//       <Image 
//       style={{width: 200, height: 200}}
//       source={{uri:"data:image/webp;base64,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"}}
//       />

// {/* ----------------------------- Button Start --------------------------- */}
//       {/* <Button title="Press Me"></Button> */}

//       <TouchableOpacity style={{padding:10, backgroundColor:'green'}}>
//         <Text style={{textAlign:'center', color:'white'}}>Press Me</Text>
//       </TouchableOpacity> 

// {/* -------------- EVENT (onPress, onPressIn, onPressOut, OnLongPress) ------------ */}
      
//     {/* ---- onPress ---- */}
//       <TouchableOpacity style={{padding:10, backgroundColor:'blue'}}
//         onPress={()=> Alert.alert("Pressed")}>
//           <Text>Press</Text>
//       </TouchableOpacity>


//     {/* ---- onPressIn ---- */}
//       <TouchableOpacity style={{padding:10, backgroundColor:'purple'}}
//         onPressIn={()=> Alert.alert("Pressed-In")}>
//           <Text>Press In</Text>
//       </TouchableOpacity>


//     {/* ---- onPressOut ---- */}
//       <TouchableOpacity style={{padding:10, backgroundColor:'orange'}}
//         onPressOut={()=> Alert.alert("Pressed-Out")}>
//           <Text>Press Out</Text>
//       </TouchableOpacity>


//     {/* ---- onPressOut ---- */}
//       <TouchableOpacity style={{padding:10, backgroundColor:'red'}}
//         OnLongPress={()=> Alert.alert("OnLongPress")}>
//           <Text>OnLongPress</Text>
//       </TouchableOpacity>


//     {/* ---- Pressable ---- */}
//     <Pressable style={{padding:10, backgroundColor:'yellow'}}
//     onHoverIn={()=>Alert.alert("Pressable")}>
//       <Text>Press Me</Text>
//     </Pressable>

// {/* ----------------------------- Button End --------------------------- */}


//     {/* </View> */}
//     </SafeAreaView>
//   )
// }

// export default App;






// import { StyleSheet, Text, useColorScheme, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   const theme = useColorScheme();
//   const isDark = theme === 'dark';

//   const backgroundColor = isDark ? "black" : "white";
//   const textColor = isDark ? "white" : "black";

//   return (
//     <View style={[styles.container,{backgroundColor : backgroundColor}]}> 
//       <Text style={[styles.text,{color : textColor}]}>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   text:{
//     fontSize:30,
//     fontWeight:'bold'
//   }
// })


{/* ------------------------- FlatList ------------------------- */}

// import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
// import React from 'react'

// const dummy = [
//   {id:1, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:2, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:3, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:4, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:5, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:6, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:7, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:8, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:9, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:10, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:11, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:12, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:13, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:14, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:15, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:16, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:17, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:18, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:19, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
//   {id:20, name:"Johan", image:"https://www.freepik.com/free-vector/3d-illustration-male-mannequin-naked-full-body-man_3586227.htm#fromView=keyword&page=1&position=15&uuid=709af113-b0a5-41c1-8cf6-6188524b5ddd&query=Dummy+person"},
// ]

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//       data={dummy}
//       renderItem={({item})=>(
//         <View style={styles.card}>
//         <Image 
//         source={{uri:"data:image/jpeg;base64,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"}}
//         style={{width:40, height:40, borderRadius:50}}
//         />
//         <Text>{item.name}</Text>
//       </View>
//       )}

//       ItemSeparatorComponent={<View style={{height:10}} />}
//       numColumns={2}
//       columnWrapperStyle={{gap:10}}


//        />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:"#dadada",
//     width:"100%",
//     height:"100%",
//     paddingVertical:10,
//     paddingHorizontal:5    
//   },
//   card:{
//     backgroundColor:"white",
//     padding:10,
//     borderRadius:10,
//     width:100,
//     height:100,
//     alignItems:"center",
//     justifyContent:"center"
//   }
// })







{/* ----------------------------- Handle User Input --------------------------- */}

// import { StyleSheet, Text, TextInput, View,Button, Alert } from 'react-native'
// import React, { useState } from 'react'

// const App = () => {

//     const [text, setText] = useState("");
//     const [submitText, setSubmitText] = useState("");

//     const handleSubmit=()=>{
//       setSubmitText(text);
//       setText("");
//     }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Bhopal</Text>
//       <TextInput 
//       placeholder='Enter a text here...'
//       style={styles.input}
//       value={text}
//       // onChangeText={(text)=>setText(text)}  // Old
//       onChangeText={setText}  // New

//       multiline  // allows multiple lines
//       numberOfLines={1}
//       />
//       <Button title="Submit" onPress={handleSubmit} />

//       {submitText ? (<Text>Result : {submitText}</Text>) : null};

//       <Text numberOfLines={1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nesciunt ab tempora quasi labore repellendus porro fugiat doloremque. Officiis cum reiciendis harum id, voluptate vero delectus ad ducimus repellat natus! Deserunt, nemo iure blanditiis placeat ullam quae in dicta rem assumenda mollitia, dolorum vero, sint laborum laudantium voluptatibus necessitatibus doloribus!</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center",
//     padding:20,
//     gap:10,
//     backgroundColor:"#dadada"
//   },
//   title:{
//     fontSize:20,
//     fontWeight:"500"
//   },
//   input:{
//     width:"100%",
//     padding:5,
//     borderWidth:1,
//     borderRadius:5,
//     paddingVertical:10,
//   }
// })