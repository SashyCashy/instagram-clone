/**
 * Author: Sashank Pindiproli
 * Date: 16/02/20
 * Description: NavigationBar is used for navigation in app
 */

import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function NavigationBar({ leftText, onPressLeftText }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500'
  },
  leftText: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  }
});
