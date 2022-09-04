import { RouteList } from 'models/types';
import { ContactMe } from 'pages/ContactMe';
import { Home } from 'pages/Home';
import { PageName } from 'models/enums';

export const Routes: RouteList = {
  [PageName.Home]: {
    label: 'Home',
    component: Home,
  },
  [PageName.ContactMe]: {
    label: 'Contact Me',
    component: ContactMe,
  },
};
