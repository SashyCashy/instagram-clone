/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: An app container that contains different components like Avatar, AuthorRow and Comment
 */

import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Feed from './components/Feed';
import { Constants } from './Constants';
export default function App() {
  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
    </View>
  );
}

const platformVersion =
  Platform.OS === 'ios' ? parseInt(Platform.Version, 10) : Platform.Version;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 425,

    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? Constants.statusBarHeight
        : 0
  }
});
