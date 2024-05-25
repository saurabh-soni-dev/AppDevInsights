/*
What is View?

-> "View" is a block that serves as 
a container for other components. 

->The View component in React Native is 
similar to the <div> element in HTML

->example of view?
->another view inside the view?
*/

import { View, Text } from "react-native";
import React from "react";

const WhatIsView = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "orange" }}>
      <View
        style={{
          backgroundColor: "white",
          height: 300
        }}
      ></View>
      <Text>WhatIsView</Text>
    </View>
  );
};

export default WhatIsView;
