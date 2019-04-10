import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';

const styles = {
  submitLink: {
    width: 150,
  },
  submitText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  }
}

export default ({ text, handler }) => (
  <Button
    onPress={handler}
    title={text}
    titleStyle={styles.submitText}
    containerStyle={styles.submitLink}
  />
);