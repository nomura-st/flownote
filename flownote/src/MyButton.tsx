import React, { useState } from 'react';
import { Button, View } from 'react-native';


const MyButton : React.FC = () => {
  const onPress = () => {alert("aaa")};
  return (
    <View style={{padding: 10}}>
        <Button
          onPress={onPress}
          title="start"
        />
    </View>
  );
}

export default MyButton;
