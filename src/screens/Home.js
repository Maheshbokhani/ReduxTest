
import React, { Component } from 'react';
import { StyleSheet, View,Text,TouchableOpacity, TextInput, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { connect } from 'react-redux';
import { addPlace } from '../components/Place';


class Home extends React.Component {
   state = {
    placeName: '',
    places: [],
  }

placeSubmitHandler = () => {
    
    if(this.state.placeName.trim() === '') {
      return;
    }
   // this.setState({ placeName:''})
    this.props.add(this.state.placeName);
    
}

placeNameChangeHandler = (value) => {
  this.setState({
    placeName: value
  });    
}

render() {
   return (
    
    <View style={ styles.container }>
        
        <View style = { styles.inputContainer }>
      
        <TextInput
          placeholder = "Enter Places"
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }>
        </TextInput>

       
       
        </View>
    
     <TouchableOpacity
         
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
         >
        <Text style={{fontSize:15,color:'black',height:40,alignItems:'center',padding:10}}> ADD </Text>
        
        </TouchableOpacity>
       
         <View style = { styles.listContainer }>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    borderRadius:1,
    backgroundColor: '#BFFDFB',
    alignItems: 'center',
  },
  container1:{
    backgroundColor: '#C2ACEE',
   flexDirection:'column',
    alignItems: 'center',
   
},
  inputContainer: {
    borderRadius:6,
    borderWidth:1,
    marginLeft:10,
    marginBottom:10,
    marginTop:25,
    marginRight:10,
  //  flexDirection: 'column',
    alignItems: 'center',
    
  },
  placeInput: {
    width:250
  },
  placeButton: {
    width:150,
    marginTop:20,
    backgroundColor:'#03E9DA',
   alignItems:'center',
   height:40,
   borderRadius:7
  },
  checkButton: {
    width:200,
    marginTop:20,
    height:40,
    backgroundColor:'#03E9DA',
   justifyContent:'center',
    borderRadius:7
  },
  listContainer: {
   width:320,
   marginTop:10
  },
 
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)