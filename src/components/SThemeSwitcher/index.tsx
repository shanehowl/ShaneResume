import React from 'react';
import { PreferencesContext } from 'contexts/PreferencesContext';
import { Switch } from 'react-native-paper';

export const SThemeSwitcher = () => {
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  return (
    <Switch color={'red'} value={isThemeDark} onValueChange={toggleTheme} />
  );
};
