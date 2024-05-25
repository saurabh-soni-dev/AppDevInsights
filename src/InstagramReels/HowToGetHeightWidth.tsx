import {View, Text, Dimensions, useWindowDimensions} from 'react-native';
import React from 'react';

const HowToGetHeightWidth = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  let ScreenHeight = Dimensions.get('screen').height;
  let ScreenWidth = Dimensions.get('screen').width;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, color: 'red', textAlign: 'center'}}>
        How To Get Height & Width
      </Text>
      <Text style={{color: 'blue', fontSize: 25, textAlign: 'center'}}>
        Width:{ScreenWidth} {'\n'} height:{ScreenHeight}
      </Text>
    </View>
  );
};

export default HowToGetHeightWidth;
