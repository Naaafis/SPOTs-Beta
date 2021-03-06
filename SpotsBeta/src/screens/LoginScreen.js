import React, {Component}from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class LoginScreen extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Text style={style.title}>Login</Text>
      </View>
      <Text style={style.label}>Email</Text>
      <TextInput
        style={style.label}
        placeholder="Enter your email address here"
      />
      <Text style={style.label}>Password</Text>
      <TextInput style={style.label} placeholder="Enter your password here" />
      <Button title="Submit" onPress={() => this.props.navigation.push('Main Menu')} />
      <Button title="Cancel" onPress={() => this.props.navigation.goBack()} />
    </View>
    );
  }
} 

export {LoginScreen};

// = ({navigation}) => {
//   return (
//     <View style={{flex: 1}}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={style.title}>Login</Text>
//       </View>
//       <Text style={style.label}>Email</Text>
//       <TextInput
//         style={style.label}
//         placeholder="Enter your email address here"
//       />
//       <Text style={style.label}>Dog Name</Text>
//       <TextInput style={style.label} placeholder="Enter your dog name here" />
//       <Button title="Submit" onPress={() => navigation.push('Main Menu')} />
//       <Button title="Cancel" onPress={() => navigation.goBack()} />
//     </View>
//   );
// };

const style = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 48,
  },
  label: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 22,
  },
  input: {
    fontSize: 22,
    textAlign: 'center',
  },
});
