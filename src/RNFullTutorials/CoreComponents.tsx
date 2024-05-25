/*
Core components
-> View, text, image, textinput,scrollview, stylesheet, touchable opacity, button
*/

import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const CoreComponents = () => {
  return (
    <View style={styles.container}>
      <Button title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding:20
  },
});
export default CoreComponents;
