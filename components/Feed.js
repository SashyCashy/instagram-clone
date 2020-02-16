/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: Feed is a container for CardList components
 */

import {
  ActivityIndicator,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default function Feed() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(true);
  const [items, setItems] = useState('');
  const fetchData = async () => {
    try {
      let images = await fetchImages();
      setItems(images);
      setIsLoading(false);
      setIsError(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  });

  if (isLoading) {
    return <ActivityIndicator style={styles.absoluteFillStyle} size="large" />;
  }

  if (isError) {
    return <Text>Error...</Text>;
  }
  return (
    <SafeAreaView>
      <CardList items={items} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  absoluteFillStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
});
