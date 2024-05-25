import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  Platform,
} from 'react-native';
import React from 'react';

const WhatIsStylesheet = () => {
  const width = useWindowDimensions().width;
  const widthOne = Dimensions.get('screen').width;
  console.log('widthone:', widthOne);
  console.log('width:', width);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WhatIsStylesheet</Text>
    </View>
  );
};

export default WhatIsStylesheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'android' ? 'red' : 'white',
  },
  text: {
    fontSize: 20,
  },
});
