import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,BackHandler } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Home from './src/screens/Home'
import Placelist from './src/screens/PlaceList'


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
      <TouchableOpacity onPress={()=>BackHandler.exitApp()}>
      <ImageBackground
      
       style={{ width: 30, height: 30,marginLeft:5 ,marginTop:5 }}
      resizeMode="stretch"
      source={require('./src/assets/images/back.png')}
       />
    </TouchableOpacity>
   
   ),
  } 
  back = ()=>{
    BackHandler.exitApp()
  }

render() {
   
    return (
    
      <View style={{flex:1,backgroundColor: '#BFFDFB'}}>
      <View style={{flex:0.9, justifyContent:'center',alignItems:'center',backgroundColor: '#BFFDFB'}}>
       <Home/>
       </View>
       
       <View style={{flex:0.1,alignItems:'flex-end'}}>
      <TouchableOpacity
        style = { styles.checkButton }
         onPress={() => this.props.navigation.navigate('Details')} 
       >
      
      <ImageBackground
       style={{ width: 40, height: 40 }}
       resizeMode="stretch"
       source={require('./src/assets/images/next.png')}
       />
       </TouchableOpacity>
       </View>

         </View>
    
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
    
      fontSize:25,
      flex:1,
     
    },
  };
 render() {
    return (
     
      <View style={{ flex: 1}}>
        
        <Placelist/>

      </View>
    
    );
  }
}
const styles = StyleSheet.create({
  checkButton: {
    
    marginBottom:20,
    marginRight:20,
 
    justifyContent:'flex-end',
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
