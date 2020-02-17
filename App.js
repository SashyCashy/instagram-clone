/**
 * Author: Sashank Pindiproli
 * Date: 15/02/20
 * Description: An app container that contains different components like Feed, Comments and Modal
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Platform, Modal, AsyncStorage } from 'react-native';
import Feed from './components/Feed';
import Comments from './components/Comments';
import { Constants } from './Constants';
export default function App() {
  const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';
  const [commentsForItem, setCommentsForItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectItemId, setSelectItemId] = useState(null);

  /**
   *
   * @param {String} id
   */
  const openCommentScreen = id => {
    setShowModal(true);
    setSelectItemId(id);
  };

  /**
   *
   * @param {String} id
   */
  const closeCommentScreen = () => {
    setShowModal(false);
    setSelectItemId(null);
  };

  const getAssignCommentsKey = async () =>
    await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);

  useEffect(() => {
    try {
      setCommentsForItem(commentsForItem ? getAssignCommentsKey() : {});
    } catch (e) {
      console.log('Failed to load comment', text, 'for', selectItemId);
    }
  }, []);

  /**
   *
   * @param {String} text
   */
  const onSubmitComment = async text => {
    let comments = commentsForItem[selectItemId] || [];
    let updatedComments = {
      ...commentsForItem,
      [selectItemId]: [...comments, text]
    };

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updatedComments)
      );

      setCommentsForItem(updatedComments);
    } catch (e) {
      console.log('Failed to save comment', text, 'for', selectItemId);
    }
  };

  return (
    <View style={styles.container}>
      <Feed
        style={styles.feed}
        commentsForItem={commentsForItem}
        onPressComments={id => openCommentScreen(id)}
      />
      <Modal
        visible={showModal}
        animation="slide"
        onRequestClose={() => closeCommentScreen()}
      >
        <Comments
          comments={commentsForItem[selectItemId] || []}
          onClose={() => closeCommentScreen()}
          onSubmitComment={text => onSubmitComment(text)}
        />
      </Modal>
    </View>
  );
}
/**
 *
 * @return {Platform} version
 */
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
