import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from './MenuList';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <MenuList />
          <Typography variant="h6" align="right" className={classes.title}>
            Invoice Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
