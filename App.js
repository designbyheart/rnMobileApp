/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Feed from "./screens/Feed";



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Feed style = {styles.feed} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
  }
});
