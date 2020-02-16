/**
 * Author: Sashank Pindiproli
 * Date: 16/02/20
 * Description: Comments is a container for CommentInput and CommentList
 */

import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import CommentInput from '../Comments/CommentInput';
import CommentList from '../Comments/CommentList';
import NavigationBar from './NavigationBar';

export default function Comments({ comments, onClose, onSubmitComment }) {
  return (
    <SafeAreaView style={styles.comment}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput
        placeholder="Leave a comment"
        onSubmit={text => onSubmitComment(text)}
      />
      <CommentList items={comments} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comment: {
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)'
  }
});
