import React from 'react';
import { Input } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

const styles = {
  backgroundColor: 'white',
  width: 200,
  height: 40,
  paddingLeft: 5,
  marginBottom: 10,
  borderWidth: 1,
  borderRadius: 3,
}

export default ({ placeholder, secureTextEntry, keyboardType }) => (
  <Input
    inputStyle={styles}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    inputContainerStyle={{borderBottomWidth: 0}}
  />
)
