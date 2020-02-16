/**
 * Author: Sashank Pindiproli
 * Date: 16/02/20
 * Description: CommentList is used to display the user comments
 */

import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function CommentList({ items }) {
  return (
    <ScrollView>
      {items.map(item => (
        <View key={item} style={styles.comment}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)'
  }
});
