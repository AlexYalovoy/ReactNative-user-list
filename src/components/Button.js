import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = {
  submitLink: {
    paddingVertical: 15,
    backgroundColor: 'steelblue',
    borderRadius: 4,
    width: 150,
  },
  submitText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    zIndex: 10
  }
}

export default ({ text, handler }) => (
  <TouchableOpacity onPress={handler} style={styles.submitLink}>
    <Text style={styles.submitText}>{text}</Text>
  </TouchableOpacity>
);