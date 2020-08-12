import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import StepperBar from 'components/StepperBar';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  margin: 16px 0;
`;

const StepTemplate = ({ children, activeStep }) => {
  return (
    <StyledContainer>
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
