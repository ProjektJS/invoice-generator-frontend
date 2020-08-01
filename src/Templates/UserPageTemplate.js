import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import NavBar from 'components/NavBar';
import { useStyles } from 'theme/styles';

const UserPageTemplate = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Container className={classes.mainContainer}>{children}</Container>
    </div>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
