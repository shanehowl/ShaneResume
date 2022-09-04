import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from 'constants/Routes';
import { PageName } from 'models/enums';

const Drawer = createDrawerNavigator();
export const SNavigationDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={Routes.Home.label}>
      {Object.keys(Routes).map(key => {
        const route = Routes[key as PageName];
        return (
          <Drawer.Screen
            name={route.label}
            component={route.component}
            options={{ drawerLabel: route.label }}
          />
        );
      })}
    </Drawer.Navigator>
  );
};
