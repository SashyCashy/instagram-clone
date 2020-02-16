/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: CardList is a contianer for Cards components
 */

import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { getImageFromId } from '../utils/api';
import Card from './Card';

export default function CardList({ items }) {
  const renderItem = ({ item: { author, id } }) => (
    <Card
      fullName={author}
      image={{ uri: getImageFromId(id) }}
      linkText="Comments"
      onPressLinkText={() => console.log('Pressed Text')}
      image={{ uri: 'https://unsplash.it/600/600' }}
      keyExtractor={id}
    />
  );
  return (
    <FlatList style={styles.container} data={items} renderItem={renderItem} />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
