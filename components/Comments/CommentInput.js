/**
 * Author: Sashank Pindiproli
 * Date: 16/02/20
 * Description: CommentInput allows to enter the user comments
 */

import { StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { getImageFromId } from '../../utils/api';
import Card from '../Feed/Card';

export default function CommentInput({ onSubmit, placeholder = '' }) {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={word => setText(word)}
        onSubmitEditing={() => {
          onSubmit(text);
          setText('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60
  },
  input: {
    flex: 1
  }
});
