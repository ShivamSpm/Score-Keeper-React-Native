import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import {firebase} from '../config';
import { useNavigation } from '@react-navigation/native';


const Detail = ({route}) => {
    const todoRef = firebase.firestore().collection('todos');
    const [textHeading, onChangeHeadingText] = useState(route.params.item.heading);
    const [score, onChangeScore] = useState(route.params.item.score);
    const navigation = useNavigation();

    const updateTodo = () => {
      if(textHeading && textHeading.length >0){
        todoRef
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
          score: parseInt(score, 10),
        }).then(() => {
          navigation.navigate('Home')
        }).catch((error) => {
          alert(error.message);
        })
      }
    }

    

  return (
    <View style={styles.container}>
      <View style={styles.inputFieldsContainer}>
        <TextInput
          style={styles.textField}
          onChangeText={onChangeHeadingText}
          value={textHeading}
          placeholder="Update Player Name"
        />
        <TextInput
          style={styles.textField}
          keyboardType='numeric'
          onChangeText={onChangeScore}
          value={score.toString()}
          placeholder="Update Player Score"
        />
      </View>
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => updateTodo()}
      >
        <Text>UPDATE</Text>
      </Pressable>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    marginTop:80,
    marginLeft:15,
    marginRight:15,
  },
  textField:{
    marginBottom:10,
    padding:10,
    fontSize:15,
    color:'#000000',
    backgroundColor:'#e0e0e0',
    borderRadius:5
  },
  buttonUpdate:{
    marginTop:25,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:12,
    paddingHorizontal:32,
    borderRadius:4,
    elevation:10,
    backgroundColor:'#0de065',
  },
  inputFieldsContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
})