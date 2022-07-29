/**
 * @format
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {AppRegistry, TouchableOpacity} from 'react-native';
import App from './App';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from 'react-native-paper';

import {name as appName} from './app.json';

const Stack = createStackNavigator();

const Etitle = 'Test Title';
const Econtent = 'Test content';
const HomeScreen = ({navigation}) => (
  <TouchableOpacity
    onPress={() =>
      navigation?.push('Details', {
        Etitle,
        Econtent,
      })
    }>
    <Card>
      <Card.Content>
        <Title>{Etitle}</Title>
        <Paragraph>{Econtent}</Paragraph>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

const DetailsScreen = props => {
  const {title, content} = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
AppRegistry.registerComponent(appName, () => Main);
