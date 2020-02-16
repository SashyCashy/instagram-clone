/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: An app container that contains Card component
 */

import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import AuthorRow from './AuthorRow';
import getAvatarColor from '../../utils/getAvatarColor';

export default function Card({ fullName, image, linkText, onPressLinkText }) {
  return (
    <View style={styles.container}>
      <AuthorRow
        fullName={fullName}
        size={35}
        backgroundColor={getAvatarColor(fullName)}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
    height: 425,
    flex: 1
  },
  absoluteFillStyle: {
    position: 'absolute',
    top: 0,
    right: 125,
    bottom: 0,
    left: 0
  }
});
