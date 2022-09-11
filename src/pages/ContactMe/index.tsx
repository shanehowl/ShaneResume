import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const ContactMe = (props: StackHeaderProps) => {
  const { navigation } = props;
  return (
    <View style={style.container}>
      <Text>Contact Me Screen</Text>
      <Button mode="outlined" onPress={() => navigation.navigate('Landing')}>
        Detail page
      </Button>
    </View>
  );
};
