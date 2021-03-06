import React from 'react';
// nod library that concatenates classes
import classNames from 'classnames';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// core components
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';

import styles from '../../../assets/jss/material-dashboard-react/components/customTabsStyle';

const useStyles = makeStyles(styles);

export interface TabContent {
  tabName: string;
  tabIcon?: any;
  tabContent: React.ReactNode;
}

export interface CustomTabsProps {
  headerColor?: string;
  title?: string;
  tabs: TabContent[];
  plainTabs?: any;
}

const CustomTabs: React.FC<CustomTabsProps> = (props) => {
  const { headerColor, plainTabs, tabs, title } = props;

  const [value, setValue] = React.useState<any>(0);

  const handleChange = (event: any, value: any) => {
    setValue(value);
  };
  const classes = useStyles();
  const cardTitle = classNames({
    [classes.cardTitle]: true,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant='scrollable'
          scrollButtons='auto'
        >
          {tabs.map((prop: any, key: any) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop: any, key: any) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>
    </Card>
  );
};

export default CustomTabs;
