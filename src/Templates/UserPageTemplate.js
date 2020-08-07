import React from 'templates/node_modules/react';
import PropTypes from 'templates/node_modules/prop-types';
import styled from 'templates/node_modules/styled-components';
import Container from 'templates/node_modules/@material-ui/core/Container';
import NavBar from 'templates/node_modules/components/NavBar';

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
