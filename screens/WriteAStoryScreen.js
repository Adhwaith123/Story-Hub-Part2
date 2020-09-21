import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,TextInput,Image } from 'react-native';
import Firebase from 'firebase';

export default class WriteAStoryScreen extends React.Component {
    constructor(){
      super();
      this.state = {

        buttonState: 'normal'
      }
    }

    

  

    render() {
 
        return(  
              
          <View style={styles.container}>

            <TextInput style = {styles.inputBox1}

              placeholder = "StoryTitle"/> 

              <TextInput style = {styles.inputBox2}
              value = {this.state.Author}
              placeholder = "Author"/>  

<TextInput style = {styles.inputBox3}

              placeholder = "WriteAStory"/>    

          <TouchableOpacity
         onPress={()=>this.goToReadAStoryScreen}
            style={styles.scanButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
          );
      }
  
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10
    },
    buttonText:{
      fontSize: 20,
    },
    inputBox1:{
      width:200,
      height:50,
      borderWidth:2,
      fontSize:20
    },
    inputBox2:{
      width:200,
      height:50,
      borderWidth:2,
      fontSize:20,
      marginTop:10
    },
    inputBox3:{
      width:350,
      height:300,
      borderWidth:2,
      fontSize:20,
      marginTop:10
    },
    buttonText:{
      fontSize:15,
      textAlign:"center",
      marginTop:10
    }
  });

  
