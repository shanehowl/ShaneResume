import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Home = (props: StackHeaderProps) => {
  const { navigation } = props;
  return (
    <>
      <View style={style.container}>
        <Text>Home Screen</Text>
        <Button mode="outlined" onPress={() => navigation.navigate('Details')}>
          Detail page
        </Button>
      </View>
    </>
  );
};
