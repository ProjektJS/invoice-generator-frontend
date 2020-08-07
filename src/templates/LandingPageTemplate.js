import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import invoiceImg from 'assets/invoiceImg.svg';
import { UserPageTemplate } from 'templates';

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

const LandingPageTemplate = () => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <Typography variant="h3" color="initial" align="center">
          Witamy w generatorze faktur!
        </Typography>
        <StyledImage src={invoiceImg} alt="invoice" />
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default LandingPageTemplate;
