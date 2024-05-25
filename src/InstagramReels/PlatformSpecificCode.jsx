import { View, Text, Platform } from 'react-native'
import React from 'react'

const PlatformSpecificCode = () => {
  const platformName = Platform.OS === 'android'?"Andorid":'IOS'
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20, color:'black'}}>
        {platformName}</Text>
    </View>
  )
}

export default PlatformSpecificCode