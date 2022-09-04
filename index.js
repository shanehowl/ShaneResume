/**
 * @format
 */

import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';

import { name as appName } from './app.json';
import { PreferencesContext } from 'contexts/PreferencesContext';
import { SHeader } from 'components/SHeader';
import { Routes } from 'constants/Routes';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const Stack = createStackNavigator();

export default function Main() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName={Routes.Home.label}
            screenOptions={{
              header: props => <SHeader {...props} />,
            }}>
            {Object.keys(Routes).map(key => {
              const route = Routes[key];
              return (
                <Stack.Screen
                  key={key}
                  name={route.label}
                  component={route.component}
                />
              );
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
