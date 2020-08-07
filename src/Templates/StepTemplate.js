import React from 'templates/node_modules/react';
import PropTypes from 'templates/node_modules/prop-types';
import styled from 'templates/node_modules/styled-components';
import Container from 'templates/node_modules/@material-ui/core/Container';
import Paper from 'templates/node_modules/@material-ui/core/Paper';
import StepperBar from 'templates/node_modules/components/StepperBar';

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
