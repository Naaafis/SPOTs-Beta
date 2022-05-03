import React , {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
//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
class MainMenuScreen extends Component{
  render(){
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={style.title}>Main Menu</Text>
        <Button title="Edit Profile" onPress={() => this.props.navigation.push('Edit Profile')} />
        <Button
          title="Add Friends"
          onPress={() => this.props.navigation.push('Add Friends')}
        />
        <Button title="Map" onPress={() => this.props.navigation.push('Map')} />
        <Button title="Chat" onPress={() => this.props.navigation.push('Chat')} />
        <Button title="Logout" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

export {MainMenuScreen};

const style = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 48,
  },
});
