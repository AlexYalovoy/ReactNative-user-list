import React from 'react';
import { TextInput } from 'react-native';

const styles = {
  backgroundColor: 'white',
  width: 200,
  height: 40,
  paddingLeft: 5,
  marginBottom: 10,
  borderWidth: 1,
  borderRadius: 3,
}

export default ({ placeholder }) => (
  <TextInput
    style={styles}
    placeholder={placeholder}
  />
)
