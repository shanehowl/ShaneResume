/**
 * @format
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { configureFonts, Provider as PaperProvider } from 'react-native-paper';

import { Routes } from 'constants/Routes';
import { name as appName } from './app.json';
import { SHeader } from 'components/SHeader';
import { PreferencesContext } from 'contexts/PreferencesContext';

import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
  fontConfig,
} from 'constants/Themes';
import { PageName } from 'models/enums';

const Stack = createStackNavigator();

export default function Main() {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  theme = {
    ...theme,
    fonts: configureFonts(fontConfig),
  };

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
            initialRouteName={Routes.Landing.label}
            screenOptions={{
              header: props => <SHeader {...props} />,
            }}>
            {Object.keys(Routes).map(key => {
              const route = Routes[key];
              const isHeaderShown = key !== PageName.Landing;
              return (
                <Stack.Screen
                  key={key}
                  name={route.label}
                  component={route.component}
                  options={{
                    headerShown: isHeaderShown,
                  }}
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
