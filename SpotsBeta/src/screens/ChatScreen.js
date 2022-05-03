import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';


class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      receiver: '',
      message: '',
    };
    this.senderChange = this.senderChange.bind(this);
    this.receiverChange = this.receiverChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
  }

  senderChange(sender) {
    this.setState({ sender });
  }
  receiverChange(receiver) {
    this.setState({ receiver });
  }
  messageChange(message) {
    this.setState({ message });
  }

  getInfo(e) {
    const requestOptions = {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          sender: this.state.sender,
          recipient: this.state.recipient,
          message: this.state.message,
        }
      ),
    };
    fetch('http://155.41.53.23:7000/messages', requestOptions) //elastic ip.. cool.
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
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={style.title}>Messaging</Text>
        </View>
        <Text style={style.label}>Sender</Text>
        <TextInput 
          style={style.label} 
          placeholder="Sender name here" 
          value = {this.state.sender} 
          onChangeText = {this.senderChange}
        />

        <Text style={style.label}>Receiver</Text>
        <TextInput 
          style={style.label} 
          placeholder="Receiver name here"
          value={this.state.receiver}
          onChangeText={this.receiverChange}
        />

        <Text style={style.label}>Message</Text>
        <TextInput 
          style={style.label} 
          placeholder="What is the message"
          value={this.state.message}
          onChangeText={this.messageChange}
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

export { ChatScreen };


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
