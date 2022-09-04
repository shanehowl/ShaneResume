import { StackHeaderProps } from '@react-navigation/stack';
import { SThemeSwitcher } from 'components/SThemeSwitcher';
import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

const MenuNavigation = () => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Appbar.Action icon="menu" color="white" onPress={openMenu} />}>
      <Menu.Item
        onPress={() => {
          console.log('Option 1 was pressed');
        }}
        title="Option 1"
      />
      <Menu.Item
        onPress={() => {
          console.log('Option 2 was pressed');
        }}
        title="Option 2"
      />
      <Menu.Item
        onPress={() => {
          console.log('Option 3 was pressed');
        }}
        title="Option 3"
        disabled
      />
    </Menu>
  );
};
export const SHeader = (props: StackHeaderProps) => {
  const { navigation, back, route } = props;

  return (
    <Appbar.Header>
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <MenuNavigation />
      )}
      <Appbar.Content title={route.name} />
      <SThemeSwitcher />
    </Appbar.Header>
  );
};
