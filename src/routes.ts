/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';

import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Notifications from '@material-ui/icons/Notifications';

//core components/views for Admin layout
import DashboardPage from './views/Dashboard/Dashboard';
import UserProfile from './views/UserProfile/UserProfile';
import TableList from './views/TableList/TableList';
import Typography from './views/Typography/Typography';
import NotificationsPage from './views/Notifications/Notifications';
import Menu from './views/Menu/Menu';

export type Route = {
  path: string;
  name: string;
  rtlName: string;
  icon: any;
  component: React.ReactNode;
  layout: string;
};

const dashboardRoutes: Route[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    rtlName: 'لوحة القيادة',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: Person,
    component: UserProfile,
    layout: '/admin',
  },
  {
    path: '/menu',
    name: 'Configure Menu',
    rtlName: 'قائمة الجدول',
    icon: LibraryBooks,
    component: Menu,
    layout: '/admin',
  },
  {
    path: '/typography',
    name: 'Typography',
    rtlName: 'طباعة',
    icon: LibraryBooks,
    component: Typography,
    layout: '/admin',
  },

  {
    path: '/notifications',
    name: 'Notifications',
    rtlName: 'إخطارات',
    icon: Notifications,
    component: NotificationsPage,
    layout: '/admin',
  },
];

export default dashboardRoutes;
