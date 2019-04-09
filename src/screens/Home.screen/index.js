import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { WebBrowser } from 'expo';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import style from './style';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={style.inputContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign In</Text>
          </View>
          <TextInput
            placeholder="Type here your login"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Type here your password"
            secureTextEntry={true}
          />
        </View>

        <View style={styles.submitContainer}>
          <Button text='LogIn' handler={this._handleHelpPress}/>
        </View>

      </View>
    );
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create(style);
