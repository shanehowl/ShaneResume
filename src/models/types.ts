import React from 'react';
import { PageName } from './enums';

export type RouteList = {
  [pageName in PageName]: {
    label: string;
    component: React.ComponentType<any>;
  };
};
