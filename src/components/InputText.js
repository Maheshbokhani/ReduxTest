import React, { Component } from 'react';
import { StyleSheet, View,Text,TouchableOpacity, TextInput, FlatList } from 'react-native';

const InputText = (abc) => {
 
  return (
       
          <View style={{backgroundColor:'yellow',width:100,height:50}}>
            <Text > {abc.inputname} </Text>
          </View>
      
      );
  }
  
  export default InputText;