import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import Home from '../screens/Home'

import { ScrollView } from 'react-native-gesture-handler';

class Main extends React.Component {
   
render(){
  return(
   
  <ScrollView style={{flex:1, backgroundColor:'#BFFDFB'}}>
    <View style={styles.container1}>
       
    <View style = { {flex:1} }>
     
        <Home/>

      </View>
    </View>
    </ScrollView>


  )

}

}
const styles = StyleSheet.create({
    
    container1:{
      flex:1,
      backgroundColor: '#BFFDFB',
     flexDirection:'column',
      alignItems: 'center',
     
  },
}

)


export default (Main)