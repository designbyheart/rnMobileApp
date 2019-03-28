/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import Modal from "react-native-modal";


import Feed from "./screens/Feed";
import Comment from './screens/Comment'



export default class App extends React.Component {
state = {
  commentsForItem: {},
  showModal: false,
  selectedItemId: null
}

openCommentScreen = id => {
  this.setState({
    showModal: true,
    selectedItemId: id
  })
}

closeCommentScreen = () => {
  this.setState({
    showModal: false,
    selectedItemId: null
  })
}

onSubmitComment = (text) => {
  const { selectedItemId, commentsForItem} = this.state
const comments = commentsForItem[selectedItemId] || []

const updated = {...commentsForItem,
[selectedItemId] : [...comments, text],
}
this.setState({ commentsForItem: updated})
}


  render() {

    const {commentsForItem, showModal, selectedItemId} = this.state
    return (
      <View style={styles.container}>
         <Feed 
         style = {styles.feed}
         commentsForItem = {commentsForItem}
         onPressComments = {this.openCommentScreen} 
         />
         <Modal
         visible = {showModal}
         animationType = 'slide'
         onRequestClose = {this.closeCommentScreen}
         >
         <Comment
         style = {styles.container}
         comments = {commentsForItem[selectedItemId] || []}
         onClose = {this.closeCommentScreen}
         onSubmitComment={this.onSubmitComment}
         />
         </Modal>
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
