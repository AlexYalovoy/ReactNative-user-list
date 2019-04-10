import React from 'react';
import { View } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { firstPage, secondPage, thirdPage, fourthPage } from '../../mock';

import style from './style';

export default class LinksScreen extends React.Component {
  state = {
    userList: []
  }

  makeUserList(...args) {
    return args
      .reduce((acc, el) =>  [...acc,...el.data], [])
      .sort((a, b) => a.id - b.id)
  }

  componentDidMount() {
    setTimeout(() => {
      const userList = this.makeUserList(firstPage, secondPage, thirdPage, fourthPage);
      this.setState({ userList })
    }, 1000);
  }

  static navigationOptions = {
    title: 'User list',
  };

  render() {
    const { userList } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={{alignItems: "stretch"}}>
        {userList.map( el => (
          <View key={el.id} style={styles.userContainer}>
            <Image
              source={{uri: el.avatar}}
              style={styles.userAvatar}
            />
            <Text style={style.userName}>
              {`${el.first_name} ${el.last_name}`}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create(style);
