import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

const HowToDetectVersion = () => {
  let version = Platform.Version;
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>
        Version is: {version}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HowToDetectVersion;
