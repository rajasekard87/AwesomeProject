import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Login = (props: { login: any; }) => {

  const [username, _setUsername] = useState('');
  const [password, _setPassword] = useState('');
  const [phone, _setPhone] = useState('');

  const _onSubmitLogin = () => {
    const { login } = props;
    if (login) {
      login({ username, password });
    }
  }

  return (
    <View style={styles.container}>
<Text style={styles.title}> Welcome Back</Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
testID="username"
value={username}
placeholder="Enter Username"
placeholderTextColor="#003f5c"
onChangeText={text => _setUsername(text)}
/>
</View>
<View style={styles.inputView}>
<TextInput
testID="password"
value={password}
style={styles.inputText}
secureTextEntry
placeholder="Enter Password"
placeholderTextColor="#003f5c"
onChangeText={text => _setPassword(text)}/>
</View>
<TouchableOpacity
testID="btnSubmit"
onPress={_onSubmitLogin}
style={styles.loginBtn}>
<Text style={{color:"white",fontSize:18}}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {()=>{}}>
<Text style={styles.forgotAndSignUpText}>New Here ? Register</Text>
</TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  title:{
  fontWeight: "bold",
  fontSize:30,
  color:"#20b2aa",
  marginBottom: 40, 
  marginTop:-20
  },
  inputView:{
  width:"80%",
  backgroundColor:"lightgrey",
  borderRadius:25,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20
  },
  inputText:{
  height:50,
  color:"black"
  },
  forgotAndSignUpText:{
  color:"#20b2aa",
  fontSize:13,
  margin:10,
  fontWeight:'bold'
  },
  loginBtn:{
  width:"80%",
  backgroundColor:"#20b2aa",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:20,
  marginBottom:10
  },
  forgotText:{
  color:"black",
  fontSize:12,
  textAlign:"right",
  justifyContent:"flex-end",
  flexDirection:"row",
  alignItems:"flex-end"
  }
  });

export default Login;

