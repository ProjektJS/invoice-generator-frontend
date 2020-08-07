import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import StepperBar from 'components/StepperBar';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPaper = styled(Paper)`
  margin: 16px 0;
`;

const StepTemplate = ({ children, activeStep }) => {
  return (
    <StyledContainer maxWidth="lg">
      <StepperBar activeStep={activeStep} />
      <StyledPaper elevation={3}>{children}</StyledPaper>
    </StyledContainer>
  );
};

StepTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default StepTemplate;
