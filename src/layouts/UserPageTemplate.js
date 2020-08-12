import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import NavBar from 'components/NavBar';

const StyledContainer = styled(Container)`
  margin-top: 48px;
`;

const UserPageTemplate = ({ children }) => {
  return (
    <div>
      <NavBar />
      <StyledContainer>{children}</StyledContainer>
    </div>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
