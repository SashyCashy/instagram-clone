/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: CardList is a container for Cards components
 */

import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { getImageFromId } from '../../utils/api';
import Card from './Card';

export default function CardList({ items, commentsForItem, onPressComments }) {
  const renderItem = ({ item: { author, id } }) => {
    const comments = commentsForItem[id];
    return (
      <Card
        fullName={author}
        image={{ uri: getImageFromId(id) }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
        keyExtractor={id}
      />
    );
  };
  return (
    <FlatList style={styles.container} data={items} renderItem={renderItem} />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
});
