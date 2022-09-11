import { RouteList } from 'models/types';
import { ContactMe } from 'pages/ContactMe';
import { Landing } from 'pages/Landing';
import { PageName } from 'models/enums';

export const Routes: RouteList = {
  [PageName.Landing]: {
    label: 'Landing',
    component: Landing,
  },
  [PageName.ContactMe]: {
    label: 'Contact Me',
    component: ContactMe,
  },
};
