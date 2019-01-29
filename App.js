import React from 'react';
import { Button, View, Text,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Home from './src/screens/Home'
import Placelist from './src/screens/PlaceList'
 import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
  static navigationOptions = {

    headerTitle:'Home',
    
    headerStyle:{
      backgroundColor:'#C2ACEE'
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:25,
      flex:1,
     
    },
   
    headerLeft: (
      <TouchableOpacity onPress={this.back}>
      <ImageBackground
      
       style={{ width: 30, height: 30,marginLeft:5 ,marginTop:5 }}
      resizeMode="stretch"
      source={require('./src/assets/images/back.png')}
     />
  </TouchableOpacity>
    ),

  }
render() {
   
    return (
     <ScrollView style={{flex:1,backgroundColor:'#BFFDFB'}}>
      <View style={{ flex: 1,justifyContent:'center',alignItems:'center',backgroundColor: '#BFFDFB',}}>
       <Home/>
       <TouchableOpacity
         
         style = { styles.checkButton }
         onPress={() => this.props.navigation.navigate('Details')} 
       >
       <Text style={{fontSize:15,color:'black',paddingLeft:30}}> Check Places </Text>
       </TouchableOpacity>

         </View>
      </ScrollView>
    );
  }
}
class DisplayScreen extends React.Component {
  
  static navigationOptions = {

    headerTitle:'Placelist',
    
    headerStyle:{
      backgroundColor:'#C2ACEE'
    },
    headerTitleStyle: {
     // fontWeight: 'bold',
      fontSize:25,
      flex:1,
     
    },
  };
 render() {
    return (
     
      <View style={{ flex: 1,}}>
        
        <Placelist/>

      </View>
    
    );
  }
}
const styles = StyleSheet.create({
  checkButton: {
    width:150,
    marginBottom:50,
    height:40,
    backgroundColor:'#03E9DA',
    justifyContent:'space-around',
    borderRadius:7
  },
}
)

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DisplayScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Navigate extends React.Component {
  render() {
    return (<AppContainer />);
  }
}
