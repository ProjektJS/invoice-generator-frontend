import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { routes } from 'routes';
import MenuList from './MenuList';

const StyledTextLogo = styled(Typography)`
  flex-grow: 1;
  text-decoration: none;
  color: white;
`;

const NavBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <MenuList />
          <StyledTextLogo variant="h6" align="right" component={Link} to={routes.home}>
            Invoice Generator
          </StyledTextLogo>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
