import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import NewTweetButton from "../components/NewTweetButton";
import UserFleetPreview from '../components/UserFleetPreview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <UserFleetPreview user={{ id: 1, name: "Sumedh", image: "https://picsum.photos/id/237/200/300" }} />
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
