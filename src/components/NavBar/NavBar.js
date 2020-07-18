import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from 'theme/styles';
import MenuList from './MenuList';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
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
