/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: An app container that contains Avatar and Comment Link
 */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import getAvatarColor from '../../utils/getAvatarColor';
import getInitials from '../../utils/getInitials';

export default function AuthorRow({ fullName, linkText, onPressLinkText }) {
  return (
    <View style={styles.container}>
      <Avatar
        initials={getInitials(fullName)}
        size={35}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText} style={styles.linkText}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  text: {
    marginHorizontal: 10
  },
  linkText: {
    position: 'absolute',
    right: 20,
    justifyContent: 'center'
  }
});
