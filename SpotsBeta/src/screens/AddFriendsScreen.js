import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';


class AddFriendsScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      username_friend: '',
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.username_friendChange = this.username_friendChange.bind(this);
  }

  usernameChange(username) {
    this.setState({ username });
  }
  username_friendChange(username_friend) {
    this.setState({ username_friend });
  }

  getInfo(e) {
    const requestOptions = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          username: this.state.username,
          username_friend: this.state.username_friend,
        }
      ),
    };
    fetch('http://155.41.22.205:6000/addfriends', requestOptions) //elastic ip.. cool.
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data))
        // this.setState({ message: data })
      })
      .catch(error => console.log(error))
    //this.pushData();
  }

  render() {
    // const {navigation} = this.props.navigate;
    return(
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.title}>Add Friends</Text>
        </View>
        <Text style={style.label}>Username</Text>
        <TextInput
          style={style.label}
          placeholder="Choose a username"
          value={this.state.username}
          onChangeText={this.usernameChange}
        />
        <Text style={style.label}>Friend to add</Text>
        <TextInput
          style={style.label}
          placeholder="Choose a username"
          value={this.state.username_friend}
          onChangeText={this.username_friendChange}
        />
        <Button
          title="Submit"
          onPress={() => this.getInfo(this.state.name)}
          color='blue'
        />
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export {AddFriendsScreen};

// = ({navigation}) => {
//   return (
//     <View style={{flex: 1}}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={style.title}>Add Friends</Text>
//       </View>
//       <Text style={style.label}>Serch User</Text>
//       <TextInput style={style.label} placeholder="Enter a user name here" />
//       <Button title="Back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

const style = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 48,
  },
  label: {
    marginLeft: 20,
    fontSize: 22,
  },
  input: {
    fontSize: 22,
    textAlign: 'center',
  },
});
