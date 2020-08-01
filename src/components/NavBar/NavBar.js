import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { routes } from 'routes';
import { useStyles } from 'theme/styles';
import MenuList from './MenuList';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <MenuList />
          <Typography
            variant="h6"
            align="right"
            className={classes.title}
            component={Link}
            to={routes.home}
          >
            Invoice Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
