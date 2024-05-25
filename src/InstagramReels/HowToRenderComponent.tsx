import {View, Text, Platform} from 'react-native';
import React from 'react';

const ForIOS = () => (
  <Text
    style={{fontSize: 20, textAlign: 'center', padding: 20, color: 'black'}}>
    iOS Component
  </Text>
);

const ForAndroid = () => (
  <Text
    style={{fontSize: 20, textAlign: 'center', padding: 20, color: 'black'}}>
    Android Component
  </Text>
);

const HowToRenderComponent = () => {
  return <View>{Platform.Version === 'ios' ? <ForIOS /> : <ForAndroid />}</View>;
};

export default HowToRenderComponent;
