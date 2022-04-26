import React , {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class ViewProfileScreen extends Component {
  render(){
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export {ViewProfileScreen};

const style = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 48,
  },
  label: {
    fontSize: 22,
    marginBottom: 20,
  },
  map: {
    width: 340,
    height: 360,
    backgroundColor: 'antiquewhite',
    marginBottom: 20,
  },
});
