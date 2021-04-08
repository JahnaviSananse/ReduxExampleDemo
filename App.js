import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  LoginSuccess,
  EmailTextChange,
  PasswordTextChange,
} from './Redux/Auth/Auth.actions';

const App = props => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const onOKPress = () => {
    props.login(email, password);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Email :</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          // onChangeText={text => setemail(text)}
          onChangeText={text => props.onEmail(text)}
        />
      </View>
      <View>
        <Text>Password :</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          // onChangeText={text => setpassword(text)}
          onChangeText={text => props.onPass(text)}
        />
      </View>
      <Button title="ok" onPress={onOKPress} />
      {/* <Text>{props.userData[0].email} </Text> */}
      <Text>{props.realEmail} </Text>
      <Text>{props.realPass} </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

const mapStateToProps = state => ({
  userData: state.Auth.Data,
  realEmail: state.Auth.realTimeEmail,
  realPass: state.Auth.realTimePass,
});
const mapDispatchToProps = dispatch => ({
  login: (email, password) =>
    dispatch(LoginSuccess({email: email, password: password})),
  onEmail: email => dispatch(EmailTextChange(email)),
  onPass: pass => dispatch(PasswordTextChange(pass)),

  // login : (data)=>dispatch(LoginSuccess(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
