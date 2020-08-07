import React from 'templates/node_modules/react';
import styled from 'templates/node_modules/styled-components';
import Typography from 'templates/node_modules/@material-ui/core/Typography';
import { UserPageTemplate } from 'templates';
import error404 from 'assets/error404.svg';

const StyledWrapper = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledImage = styled.img`
  height: 60%;
  max-width: 100%;
`;

const ErrorPageTemplate = () => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <Typography variant="h3" color="initial" align="center">
          Oops! Nie ma takiej strony.
        </Typography>
        <StyledImage src={error404} alt="error" />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default ErrorPageTemplate;
