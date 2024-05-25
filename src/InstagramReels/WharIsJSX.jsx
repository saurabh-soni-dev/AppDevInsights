/* What is JSX?
 -> JSX stands for JavaScript XML. 
 -> It is a syntax extension for JavaScript.
 -> Mostly used  for building user interfaces.

 Points to cover:
 -> example of jsx?
 -> how to pass dunamically value on JSX? 
*/


import { View, Text } from 'react-native'
import React from 'react'

const WharIsJSX = () => {
  const name = "Saurabh"
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>{name}</Text>
    </View>
  )
}

export default WharIsJSX