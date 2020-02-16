# Instagram-Clone

An app that resembles famous social app, Instagram is built using React-Native App.

## Table of contents

- [General Info](#general-info)
- [Technologies](#technolgies)
- [Setup](#setup)
- [App Structure](#directory)

## General Info

This project is used to display image feed and comment section to add comments

## Technologies

Project is created with:

- React Native
- React
- Expo (https://expo.io/learn)
- Android SDK

## Setup

### Install npm Packages

- npm install react package
- npm install react-native package
- npm install react-dom package
- npm install yarn
- npm install expo-cli --global

### Create expo project

```
$ expo init instagram-clone --template blank@sdk-34 --yarn
$ cd instagram-clone
$ expo start
```

## App Structure

- 📂 **instagram\-clone**
  - 📄 [App.js](App.js)
  - 📄 [Constants.js](Constants.js)
  - 📄 [app.json](app.json)
  - 📂 **assets**
    - 📄 [icon.png](assets/icon.png)
    - 📄 [splash.png](assets/splash.png)
  - 📂 **components**
    - 📂 **Comments**
      - 📄 [CommentInput.js](components/Comments/CommentInput.js)
      - 📄 [CommentList.js](components/Comments/CommentList.js)
      - 📄 [NavigationBar.js](components/Comments/NavigationBar.js)
      - 📄 [index.js](components/Comments/index.js)
    - 📂 **Feed**
      - 📄 [AuthorRow.js](components/Feed/AuthorRow.js)
      - 📄 [Avatar.js](components/Feed/Avatar.js)
      - 📄 [Card.js](components/Feed/Card.js)
      - 📄 [CardList.js](components/Feed/CardList.js)
      - 📄 [index.js](components/Feed/index.js)
  - 📄 [package.json](package.json)
  - 📂 **utils**
    - 📄 [api.js](utils/api.js)
    - 📄 [getAvatarColor.js](utils/getAvatarColor.js)
    - 📄 [getInitials.js](utils/getInitials.js)
