import {View, Image} from 'react-native';
import React from 'react';
import ImageIndex from '../assets/ImageIndex';

const AddImage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={ImageIndex.logo} style={{height: 300, width: 300}} />
    </View>
  );
};

export default AddImage;
