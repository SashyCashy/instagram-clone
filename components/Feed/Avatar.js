/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: An app container that displays Avatar
 */
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
export default function Avatar({ size, backgroundColor, initials }) {
  const style = {
    width: size,
    height: size,
    borderRadius: size * 2,
    backgroundColor
  };

  return (
    <View style={[style, styles.container]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
});
