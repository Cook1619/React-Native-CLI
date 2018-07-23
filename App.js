/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
        <View style={{ flex: 1, backgroundColor: 'red' }}></View>
        <View style={{ flex: 1, backgroundColor: 'teal' }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
