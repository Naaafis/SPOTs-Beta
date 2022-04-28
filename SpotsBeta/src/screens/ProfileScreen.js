import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

class ProfileScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      fullname: '',
      dob: '',
      pronouns: '',
      email: '',
      abt: '',
    };
    this.usernameChange = this.usernameChange.bind(this);
    this.fullnameChange = this.fullnameChange.bind(this);
    this.dobChange = this.dobChange.bind(this);
    this.pronounsChange = this.pronounsChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.abtChange = this.abtChange.bind(this);
  }
  
  usernameChange(username){
    this.setState({username});
  }
  fullnameChange(fullname){
    this.setState({fullname});
  }
  dobChange(dob){
    this.setState({dob});
  }
  pronounsChange(pronouns){
    this.setState({pronouns});
  }
  emailChange(email){
    this.setState({email});
  }
  abtChange(abt){
    this.setState({abt});
  }



  // postName(name){
  //   try {
  //     const response =  fetch('http://localhost:3001/api',
  //       {
  //       method:'POST', 
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({name: this.state.name})
  //       }
  //     );
  //     const json =  response.json();
  //     this.setState({ data: json.message });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  // async pushData() {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {Accept: 'application/json'  , 'Content-Type': 'application/json' ,},
  //     body: JSON.stringify({
  //       message : 'valueRandomapaknfa',
  //     }),
  //   };
  //   try {
  //     const response = await fetch('http://localhost:3001/api',requestOptions);
  //     const json = await response.json();
  //     // this.setState({ data: json.message });
  //     console.log('ehllo')

  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     // this.setState({ isLoading: false });
  //     console.log("byebye");
  //   }
  // }

  // getInfo(e){
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {Accept: 'application/json'  , 'Content-Type': 'application/json' },
  //     body: JSON.stringify({'p_id':1,'d_id':1,'d_type':"scale",'d':133}),
  //   };
  //   fetch('http://155.41.109.88:5000/data', requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(JSON.stringify(data))
  //       // this.setState({ message: data })
  //     })
  //     .catch(error=> console.log(error))
  //   //this.pushData();
  // }

  getInfo(e){
    const requestOptions = {
      method: 'POST',
      headers: {Accept: 'application/json'  , 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
        username: this.state.username,
        fullname: this.state.fullname,
        dob: this.state.dob,
        pronouns: this.state.pronouns,
        email: this.state.email,
        abt: this.state.abt,
        }
      ),
    };
    fetch('http://155.41.53.23:5000/adduser', requestOptions) //elastic ip.. cool.
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data))
        // this.setState({ message: data })
      })
      .catch(error=> console.log(error))
    //this.pushData();
  }

  // getInfo(e){
  //   const requestOptions = {
  //     method: 'GET',
  //     headers: {Accept: 'application/json'  , 'Content-Type': 'application/json' },
  //   };
  //   fetch('http://localhost:3001/api', requestOptions)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       // this.setState({ message: data })
  //     })
  //     .catch(error=> console.log(error))
  //   //this.pushData();
  // }
 
  render(){
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center'}}>
          <Text style={style.title}>Profile</Text>
        </View>
        <Text style={style.label}>Username</Text>
        <TextInput
          style={style.label}
          placeholder="Choose a username" 
          value = {this.state.username}
          onChangeText = {this.usernameChange}
        />
        <Text style={style.label}>Fullname</Text>
        <TextInput
          style={style.label}
          placeholder="Enter your full name here" 
          value = {this.state.fullname}
          onChangeText = {this.fullnameChange}
        />
        <Text style={style.label}>DOB (mm-dd-yyyy)</Text>
        <TextInput
          style={style.label}
          placeholder="Enter your date of birth here"
          value = {this.state.dob}
          onChangeText = {this.dobChange}
        />
        <Text style={style.label}>Pronouns</Text>
        <TextInput
          style={style.label}
          placeholder="Enter your pronouns here"
          value= {this.state.pronouns}
          onChangeText = {this.pronounsChange}
        />
        <Text style={style.label}>Email</Text>
        <TextInput
          style={style.label}
          placeholder="Enter your email address here"
          value = {this.state.email}
          onChangeText = {this.emailChange}
        />
        <Text style={style.label}>About</Text>
        <TextInput
          style={style.label}
          placeholder="Enter something about yourself here" 
          value = {this.state.abt}
          onChangeText = {this.abtChange}
        />
        <Button
          title = "Submit"
          onPress= {() => this.getInfo(this.state.name)}
          color='blue'
        />
        <Button
          title="Back" 
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  };
}

export {ProfileScreen};

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
