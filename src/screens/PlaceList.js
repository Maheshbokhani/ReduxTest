import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Home from '../screens/Home'
import { addPlace } from '../components/Place';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
class Main extends React.Component {
   
render(){
  return(
   
   <View style={styles.container}>
   
   <FlatList style = { styles.listContainer }
          data = { this.props.places }
          keyExtractor={(item, index) => index.toString()}
          renderItem = { info => (
         <ListItem 
          placeName={ info.item.value }
         />
       )}
      />
    </View>
   )
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    borderRadius:1,
    backgroundColor: '#BFFDFB',
    alignItems: 'center',
  },
  

  listContainer:{
     
      width:320,
      marginTop:10,
      backgroundColor: '#BFFDFB',
      flexDirection:'column',
    },
}
)

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)