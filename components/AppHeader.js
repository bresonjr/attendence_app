import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>8th.A ATTENDANCE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'red',
    borderTopWidth: 5,
    borderTopColor: 'red',
    borderBottomColor: 'red',
    borderLeftColor: 'lightgreen',
    borderRightColor: 'lightgreen',
    borderBottomWidth:5,
    borderRightWidth:5,
    borderLeftWidth:5,
    borderRadius:15
  },
  text:{
    color: 'lightgreen',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
});

