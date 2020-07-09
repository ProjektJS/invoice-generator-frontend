import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { NavBar } from 'components';

const UserPageTemplate = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container>{children}</Container>
    </div>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
