import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from 'theme/styles';
import { routes } from 'routes';

const MenuList = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const pages = [
    { name: 'Strona główna', to: `${routes.home}` },
    { name: 'Uwórz fakturę', to: `${routes.create}` },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon onClick={handleClick} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {pages.map(({ name, to }) => (
          <MenuItem key={name} component={Link} to={to} selected={pathname === to}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuList;
